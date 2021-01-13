const knex = require('./knex');

module.exports = {
  getAllAirports() {
    return knex('airports');
  },
  getAllUsers() {
    return knex('users');
  },
  getAllQuotes() {
    return knex('quotes');
  }
};