import http from 'http';

const products = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' }
];

const server = http.createServer((req, res) => {
  if (req.url === '/products') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(products));
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Backend running');
});

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Backend listening on http://localhost:${port}`));
