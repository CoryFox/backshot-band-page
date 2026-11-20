import { readFile } from "node:fs/promises";
import { createServer } from "node:http";

const port = Number(process.env.PORT || 3000);
const address = "127.0.0.1";
const origin = `http://${address}:${port}`;
const files = new Map([
  ["/", ["index.html", "text/html; charset=utf-8"]],
  ["/lines-lines-lines/", ["lines-lines-lines/index.html", "text/html; charset=utf-8"]],
  ["/style.css", ["style.css", "text/css; charset=utf-8"]],
  ["/video.js", ["video.js", "text/javascript; charset=utf-8"]],
  ["/contact.js", ["contact.js", "text/javascript; charset=utf-8"]],
  ["/assets/backshot-wall.jpg", ["assets/backshot-wall.jpg", "image/jpeg"]],
  ["/robots.txt", ["robots.txt", "text/plain; charset=utf-8"]],
  ["/sitemap.xml", ["sitemap.xml", "application/xml; charset=utf-8"]],
]);

function reply(response, status, message) {
  response.writeHead(status, { "Content-Type": "text/plain; charset=utf-8" });
  response.end(message);
}

createServer(async (request, response) => {
  response.setHeader("X-Robots-Tag", "noindex");
  response.setHeader("X-Content-Type-Options", "nosniff");
  try {
    const path = new URL(request.url, origin).pathname;
    if (request.method !== "GET" && request.method !== "HEAD") return reply(response, 405, "Method not allowed.");
    if (path === "/lines-lines-lines") {
      response.writeHead(308, { Location: "/lines-lines-lines/" });
      return response.end();
    }
    const file = files.get(path);
    if (!file) return reply(response, 404, "Page not found.");

    const content = await readFile(new URL(`./docs/${file[0]}`, import.meta.url));
    response.writeHead(200, { "Content-Type": file[1], "Content-Length": content.length });
    response.end(request.method === "HEAD" ? undefined : content);
  } catch {
    if (!response.headersSent) reply(response, 500, "Something went wrong. Please try again.");
  }
}).listen(port, address, () => {
  console.log(`BACKSHOT local preview at ${origin}`);
});
