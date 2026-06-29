import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 3000;
const DIR = path.join(__dirname, "out");

http.createServer((req, res) => {
  let filePath = path.join(DIR, req.url === "/" ? "index.html" : req.url);
  const ext = path.extname(filePath);
  const mime = {
    ".html": "text/html; charset=utf-8",
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
    ".woff2": "font/woff2",
    ".woff": "font/woff",
    ".ttf": "font/ttf",
  };

  if (!fs.existsSync(filePath)) {
    filePath = path.join(DIR, "index.html");
  }

  const content = fs.readFileSync(filePath);
  res.writeHead(200, { "Content-Type": mime[ext] || "text/plain", "Access-Control-Allow-Origin": "*" });
  res.end(content);
}).listen(PORT, "0.0.0.0", () => {
  console.log(`AutoFit server running on http://localhost:${PORT}`);
});