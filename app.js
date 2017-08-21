require('dotenv').config()

const express = require('express');
const app = express();

const index = require('./routes/index');
const crypto = require('./routes/crypto');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// GET Routes
app.get('/', index);

// POST Routes
app.post('/crypto', crypto);

// Start Listening
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});