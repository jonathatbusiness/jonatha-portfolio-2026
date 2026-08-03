import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const isWindows = process.platform === "win32";
const nextCli = path.join(root, "node_modules", "next", "dist", "bin", "next");
let opened = false;

const devServer = spawn(process.execPath, [nextCli, "dev"], {
  cwd: root,
  env: process.env,
  stdio: ["inherit", "pipe", "pipe"],
});

function openUrl(url) {
  if (opened) return;
  opened = true;

  const command = isWindows ? "cmd" : process.platform === "darwin" ? "open" : "xdg-open";
  const args = isWindows ? ["/c", "start", "", url] : [url];
  const opener = spawn(command, args, {
    detached: true,
    stdio: "ignore",
  });

  opener.unref();
}

function detectUrl(text) {
  const localUrl = text.match(/Local:\s+(https?:\/\/[^\s]+)/)?.[1];
  const fallbackUrl = text.match(/(https?:\/\/localhost:\d+)/)?.[1];
  const url = localUrl ?? fallbackUrl;

  if (url) {
    openUrl(url);
  }
}

function handleOutput(chunk) {
  const text = chunk.toString();
  process.stdout.write(text);
  detectUrl(text);
}

devServer.stdout.on("data", handleOutput);
devServer.stderr.on("data", (chunk) => {
  const text = chunk.toString();
  process.stderr.write(text);
  detectUrl(text);
});

devServer.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});

process.on("SIGINT", () => {
  devServer.kill("SIGINT");
});

process.on("SIGTERM", () => {
  devServer.kill("SIGTERM");
});
