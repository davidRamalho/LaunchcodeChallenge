const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

router.get('/', (req, res) => {
  queries.getAllQuotes().then(quotes => {
    res.json(quotes);
  });
});

router.post('/', (req, res) => {
  console.log(req.body);
  const input = {
    from_airport_id: req.body.fromAirport,
    destination_airport_id: req.body.destinationAirport,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    transportation: req.body.transportation,
    departure_date: req.body.departureDate,
    return_date: req.body.returnDate,
    number_of_travellers: req.body.numberOfTravellers
  };
  queries.createQuotes(input).then(quotes => {
    res.json(quotes);
  });
});

module.exports = router;