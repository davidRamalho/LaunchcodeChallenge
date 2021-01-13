const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

router.get('/', (req, res) => {
  queries.getAllUsers().then(users => {
    res.json(users);
  });
});

module.exports = router;