const { createServer } = require('http');
const { join } = require('path');
const next = require('next');

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    if (req.url.startsWith('/_next'))   
 {
      app.render(req, res, req.url);
    } else {
      handle(req, res);
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});