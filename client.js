const net = require('net');

const read = function(fileName) {
  const conn = net.createConnection({
    host: 'localhost',
    port: 3000
  });
  
  conn.setEncoding('utf8');
  
  conn.on('connect', () => {
    conn.write(fileName);
  });
  
  conn.on('data', (data) => {
    console.log('File\'s content: ', data);
    process.exit();
  });

};

const fileName = process.argv[2];
read(fileName);