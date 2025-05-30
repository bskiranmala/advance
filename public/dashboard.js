const socket = io();
const userCount = document.getElementById('userCount');
const ctx = document.getElementById('chart').getContext('2d');

let labels = [];
let data = [];

const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'Live Data',
      data: data,
      borderColor: 'blue',
      fill: false
    }]
  }
});

socket.on('userCount', (count) => {
  userCount.textContent = count;
});

socket.on('initData', (points) => {
  points.forEach(point => {
    labels.push(point.time);
    data.push(point.value);
  });
  chart.update();
});

socket.on('newData', (point) => {
  labels.push(point.time);
  data.push(point.value);
  if (labels.length > 10) {
    labels.shift();
    data.shift();
  }
  chart.update();
});
