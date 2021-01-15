const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

router.get('/', (req, res) => {
  queries.getAllQuotes().then(quotes => {
    res.json(quotes);
  });
});

router.post('/', (req, res) => {
  queries.createQuotes(req.body).then(quotes => {
    res.json(quotes);
  });
});

module.exports = router;