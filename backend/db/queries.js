const knex = require('./knex');

module.exports = {
  getAllAirports() {
    return knex('airports');
  },
  getAllQuotes() {
    return knex('quotes');
  },
  createQuotes(quote) {
    return knex('quotes').insert(quote, '*');
  }
};