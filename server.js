const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const redisAdapter = require('socket.io-redis');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.adapter(redisAdapter({ host: 'localhost', port: 6379 })); // Redis for scaling

let users = 0;
let dataPoints = [];

app.use(express.static('public'));

io.on('connection', (socket) => {
  users++;
  io.emit('userCount', users);

  socket.emit('initData', dataPoints);

  const interval = setInterval(() => {
    const point = { time: new Date().toLocaleTimeString(), value: Math.floor(Math.random() * 100) };
    dataPoints.push(point);
    if (dataPoints.length > 10) dataPoints.shift(); // Keep 10 points
    io.emit('newData', point);
  }, 3000);

  socket.on('disconnect', () => {
    users--;
    io.emit('userCount', users);
    clearInterval(interval);
  });
});

server.listen(3000, () => console.log('Server running on port 3000'));
