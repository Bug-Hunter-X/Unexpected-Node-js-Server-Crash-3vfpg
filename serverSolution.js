const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
  // Add any additional error handling logic here, such as logging to a file or sending alerts
});

server.listen(8080, () => {
  console.log('Server started on port 8080');
});
