const { table } = require("../knex");

exports.up = function(knex) {
  return knex.schema.createTable('airport', function(table) {
    table.increments();
    table.string('name').notNullable();
    table.string('code').notNullable();
    table.string('city').notNullable();
    table.string('country').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('airport');
};