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

let PORT = 0;

if (process.env.NODE_ENV !== 'production')
  PORT = process.env.BACKEND_PORT || 3000;
else
  PORT = process.env.PORT || 3000;

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
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
        .select('*',{ distinct: true })
        .order('score', { ascending: false });;
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

app.get('/api/image/:image', async( req, res) => {
  const { data, error } = await supabase
  .storage
  .from('paaskequiz')
  .createSignedUrl(`2024/${req.params.image}`, 31536000)

  if (data !== null)
    res.send(data)
  else
    res.send(error)
})

app.get('/api/images/list', async( req, res) => {
  const { data, error } = await supabase
  .storage
  .from('paaskequiz')
  .list('2024', {
    limit: 100,
    offset: 0,
    sortBy: { column: 'name', order: 'asc' },
  })
  
  if (data !== null) {
    res.send(data)
  } else {
    res.send(error)
    console.log('Retrieve error image: ', error)
  }
})


// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../build')));
// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`App is up and running. Listening on port ${PORT}`);
});