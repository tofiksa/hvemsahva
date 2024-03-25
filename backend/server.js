const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());

app.post('/api/start', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.get('/api/hello', (req, res) => {
  console.log(req.body)
  res.send('world')
})

app.listen(3001, () => {
  console.log('Server is listening on port 3001');
});

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../build')));
// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});