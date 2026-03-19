const express = require('express');
const app = express();

const PORT = 3000;

// Home route
app.get('/', (req, res) => {
  res.send(' Node.js Express App is running inside Docker!');
});

// Health check route (very important for DevOps)
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    service: 'tgapp',
    port: PORT
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

