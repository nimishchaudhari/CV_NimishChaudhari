const puppeteer = require('puppeteer');
const http = require('http');
const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');

const server = http.createServer((req, res) => {
  let filePath = path.join(distDir, req.url === '/' ? 'index.html' : req.url);
  const ext = path.extname(filePath);
  const mimeTypes = {
    '.html': 'text/html', '.js': 'application/javascript',
    '.css': 'text/css', '.svg': 'image/svg+xml',
  };
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); }
    else { res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' }); res.end(data); }
  });
});

server.listen(9876, async () => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: '/home/nimish/.cache/puppeteer/chrome/linux-150.0.7871.24/chrome-linux64/chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:9876', { waitUntil: 'networkidle0' });
  await page.pdf({
    path: 'cv_latest.pdf',
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  });
  console.log('PDF saved as cv_latest.pdf');
  await browser.close();
  server.close();
  process.exit(0);
});
