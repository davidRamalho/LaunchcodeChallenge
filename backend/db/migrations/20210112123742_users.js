const { table } = require("../knex");

exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('phone');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};