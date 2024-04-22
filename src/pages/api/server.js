// server.js
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const WebSocket = require('ws');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  const wss = new WebSocket.Server({ server });
  wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
      console.log('received: %s', message);
    });

    ws.send('something');

    wss.on('connection', function connection(ws) {
        console.log('Client connected');
        
        ws.on('close', () => console.log('Client disconnected'));
        
        ws.on('message', function incoming(data) {
          // Broadcast incoming message to all clients except the sender
          wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
              client.send(data);
            }
          });
        });
      });
      
  });


  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
