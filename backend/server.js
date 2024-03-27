require('dotenv').config();
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

const PORT = process.env.PORT || 3001;

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);

//app.options('/api/start', cors())

app.post('/api/add', async (req, res) => {
  //console.log(req.body);
  const {error} = await supabase
        .from('highscore')
        .insert({
            username: req.body.username,
            score: req.body.totalScore,
        })
    if (error) {
        res.send(error);
    }
    res.send(error);
});

app.get('/api/list', async (req, res) => {
  const {data, error} = await supabase
        .from('highscore')
        .select()
    res.send(data);
})

app.put('/api/:username', async (req, res) => {
  const {error} = await supabase
      .from('highscore')
      .update({
        username: req.body.username,
        score: req.body.totalScore,
      })
      .eq('username', req.params.username)
  if (error) {
      res.send(error);
  }
  res.send("updated!!");
});



// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../build')));
// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`App is up and running. Listening on port ${PORT}`);
});