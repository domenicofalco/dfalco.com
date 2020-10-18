const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || "3000";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  console.log(`> Evironment: ${process.env.NODE_ENV}`);
  const server = express();

  server.get("*", handle);

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
