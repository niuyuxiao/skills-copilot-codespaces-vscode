// Create web server
// Create a web server that listens to requests on port 3000.
// When a request is received to the path /comments, the server should respond with an array of comments.
// The array should have 3 comments, each with an id and a comment property. The id should be a unique number and comment should be a string.
// Use the express library to create the web server.

// Start by creating a new Node.js project with npm init, and then install the express library with npm install express.

// Finally, run the server with node comments.js and test the implementation with curl, httpie, or a web browser.

const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
  const comments = [
    { id: 1, comment: 'First comment' },
    { id: 2, comment: 'Second comment' },
    { id: 3, comment: 'Third comment' },
  ];
  res.json(comments);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});