const { table } = require("../knex");

exports.up = function(knex) {
  return knex.schema.createTable('quotes', function(table) {
    table.increments();
    table.integer('from_airport_id').notNullable()
      .references('id')
      .inTable('airports')
      .onDelete('CASCADE');
    table.integer('destination_airport_id').notNullable()
      .references('id')
      .inTable('airports')
      .onDelete('CASCADE');
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('phone');
    table.enu('transportation', ['rental car', 'limousine', 'taxi', 'other']).defaultTo('other');
    table.date('departure_date').notNullable();
    table.date('return_date').notNullable();
    table.integer('number_of_travellers').notNullable().defaultTo(1);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('quotes');
};