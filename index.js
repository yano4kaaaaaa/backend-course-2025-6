// ============================
// ЛАБОРАТОРНА 6 — ЧАСТИНА 1
// Параметри командного рядка + HTTP сервер
// ============================

const http = require("http");
const fs = require("fs");
const path = require("path");
const { Command } = require("commander");

// ---------- Commander: читаємо аргументи ----------
const program = new Command();

program
  .requiredOption("-h, --host <host>", "Server host address")
  .requiredOption("-p, --port <port>", "Server port", parseInt)
  .requiredOption("-c, --cache <dir>", "Cache directory");

program.parse(process.argv);

const { host, port, cache } = program.opts();

// ---------- Створення директорії кешу ----------
if (!fs.existsSync(cache)) {
  fs.mkdirSync(cache, { recursive: true });
  console.log(`Created cache directory: ${cache}`);
}

// ---------- HTTP сервер ----------
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Inventory service is running (Part 1)");
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
