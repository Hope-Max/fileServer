const net = require('net');
const fs = require('fs');

const server = net.createServer();

server.listen(3000, () => {
  console.log('Server listening on port 3000')
});

server.on('connection', (client) => {
  console.log('New client connected!');

  client.setEncoding('utf8');
  client.on('data', (data) => {
    const path = `./${data}`;

    fs.readFile(path, 'utf-8', function (err, data) {
      if (err) return err;
      client.write(data);
    });
  });
  client.on('close', () => {
    console.log('One client disconnected!')
    process.exit();
  });
});
