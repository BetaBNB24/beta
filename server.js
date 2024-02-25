const express = require('express');
const path = require('path');
const mysql = require('mysql');

const app = express();

// Middleware to set Content-Type for .js files
app.use((req, res, next) => {
  if (req.url.endsWith('.js')) {
    res.set('Content-Type', 'text/javascript');
  }
  next();
});

// Serve static files from the 'public/Beta' directory
app.use(express.static(path.join(__dirname, 'public', 'Beta')));

// Create a connection to the database
const connection = mysql.createConnection({
  host: '::1',
  user: 'root',
  password: '',
  database: 'beta_database',
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Perform a sample query
connection.query('SELECT * FROM users', (err, results) => {
  if (err) throw err;
  console.log('Users:', results);
});

// Close the connection
connection.end();

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
