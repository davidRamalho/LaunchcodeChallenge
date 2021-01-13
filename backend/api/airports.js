const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

router.get('/', (req, res) => {
  queries.getAllAirports().then(airports => {
    res.json(airports);
  });
});

module.exports = router;