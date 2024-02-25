const express = require('express');
const path = require('path');

const app = express();
const port = 4000;

// Serve static files from the 'Beta' folder (frontend)
app.use(express.static(path.join(__dirname, '..', 'Beta')));

// Serve index.html for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'Beta', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

