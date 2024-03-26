const { createClient } = require('@supabase/supabase-js');
const morgan = require('morgan');
const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(cors())

const supabase = createClient(
  'https://kdhaitlddslpxphpcnvc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkaGFpdGxkZHNscHhwaHBjbnZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTExODI3ODksImV4cCI6MjAyNjc1ODc4OX0.dbS0y-hKuH3m5fGdtX_eeYKVYKdiGs2iVf61EUmMkH4'
);

//app.options('/api/start', cors())

app.post('/api/start', async (req, res) => {
  //console.log(req.body);
  const {error} = await supabase
        .from('highscore')
        .insert({
            username: req.body.username,
            score: req.body.totalScore,
        })
  console.log(error)      
    if (error) {
        res.send(error);
    }
    res.send(error);
});

app.listen(3001, () => {
  console.log('Server is listening on port 3001');
});

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../build')));
// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});