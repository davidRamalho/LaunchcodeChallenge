const { table } = require("../knex");

exports.up = function(knex) {
  return knex.schema.createTable('user', function(table) {
    table.increments();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('phone').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user');
};