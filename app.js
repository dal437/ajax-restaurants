// initialize database connection and register models
require('./db');

// list on port 3000
const portNum = 3000;

const express = require('express');
var bodyParser = require('body-parser');

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// load routes from routes folder
// TODO: add API routes to ./routes/places.js!!!
const placesRoutes = require('./routes/places');
app.use('/api', placesRoutes);

// enable static final serving from public folder
const path = require('path');
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('view engine', 'hbs');

// respond to / (our single page)
app.get('/', function(req, res) {
  res.render('index');
});

app.listen(portNum);
console.log('listening on', portNum);
