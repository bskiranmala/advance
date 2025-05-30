# Real-Time Dashboard (Advanced)

🚀 Scalable Real-Time Web Application built with:
- **Node.js**
- **Express.js**
- **Socket.IO** (WebSocket communication)
- **Redis** (WebSocket scaling)
- **Chart.js** (Frontend data visualization)

---

## 📦 Features
✅ Real-time data updates  
✅ Active user count  
✅ Scalable across multiple servers using Redis  
✅ Clean, responsive frontend

---

## 🛠️ Setup Instructions

### Prerequisites
- **Node.js** & **npm**
- **Redis** server running locally (default `localhost:6379`)

### Installation
```bash
npm install express socket.io socket.io-redis
```

### Run the App
```bash
node server.js
```
Visit `http://localhost:3000` in your browser.

---

## 📂 Project Structure
```
real-time-dashboard-advanced/
├── server.js
├── public/
│   ├── index.html
│   ├── dashboard.js
│   └── styles.css
└── README.md
```

---

## 🚀 Scaling with Redis
Make sure Redis is running on your system:
```bash
redis-server
```

Then, the app will use Redis to synchronize WebSocket messages across multiple Node.js instances.

---

## 🌟 License
MIT
