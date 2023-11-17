const express = require('express');
const app = express();
const port = 3000;

// Set the 'public' directory as the static folder
app.use(express.static('public'));

app.get('/', (req, res) => {
    // Send the 'index.html' file in the 'public' directory
    res.sendFile(__dirname + 'public//index.html');
  });
  
// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
