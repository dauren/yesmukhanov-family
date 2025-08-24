const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Обработка запроса на iCal файл
  if (req.url === '/family-birthdays.ics') {
    try {
      const icalContent = fs.readFileSync('family-birthdays.ics', 'utf8');
      
      // Устанавливаем правильные заголовки для iOS
      res.writeHead(200, {
        'Content-Type': 'text/calendar; charset=utf-8',
        'Content-Disposition': 'attachment; filename="family-birthdays.ics"',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*'
      });
      
      res.end(icalContent);
      console.log('📅 iCal file served successfully');
    } catch (error) {
      console.error('Error serving iCal file:', error);
      res.writeHead(404);
      res.end('iCal file not found');
    }
    return;
  }
  
  // Обработка запроса на index.html
  if (req.url === '/' || req.url === '/index.html') {
    try {
      const htmlContent = fs.readFileSync('index.html', 'utf8');
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      });
      res.end(htmlContent);
    } catch (error) {
      console.error('Error serving HTML file:', error);
      res.writeHead(404);
      res.end('HTML file not found');
    }
    return;
  }
  
  // Обработка других файлов (JS, CSS и т.д.)
  const filePath = path.join(__dirname, req.url);
  const extname = path.extname(filePath);
  
  let contentType = 'text/plain';
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
    case '.svg':
      contentType = 'image/svg+xml';
      break;
  }
  
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404);
        res.end('File not found');
      } else {
        res.writeHead(500);
        res.end('Server error: ' + error.code);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}/`);
  console.log(`📅 iCal file available at http://localhost:${PORT}/family-birthdays.ics`);
  console.log('🔗 Open this URL on your iOS device to add calendar events');
}); 