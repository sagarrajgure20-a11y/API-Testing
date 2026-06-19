import http from 'http';

const html = `<!doctype html>
<html>
  <head><meta charset="utf-8"><title>Frontend</title></head>
  <body>
    <h1>Frontend</h1>
    <p>Call backend: <a href="http://localhost:3000/products">/products</a></p>
  </body>
</html>`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
});

const port = process.env.PORT || 3001;
server.listen(port, () => console.log(`Frontend listening on http://localhost:${port}`));
