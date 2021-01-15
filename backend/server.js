const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const app = express();
const airports = require('./api/airports');
const quotes = require('./api/quotes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, function() {
  console.log("listening on port: ", port);
});

app.use('/airports', airports);
app.use('/quotes', quotes);