exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('quotes').del()
    .then(function() {
      // Inserts seed entries
      return knex('quotes').insert([
        { from_airport_id: '1', destination_airport_id: '2', name: 'Bob', email: 'bob@email.com', phone: '(403)123-4567', transportation: 'rental car', departure_date: '2021-01-15', return_date: '2021-02-15', number_of_travellers: '2'},
        { from_airport_id: '3', destination_airport_id: '7', name: 'Jane', email: 'jane@email.com', phone: '(403)123-6789', transportation: 'limousine', departure_date: '2021-01-21', return_date: '2021-02-10', number_of_travellers: '1'},
        { from_airport_id: '9', destination_airport_id: '5', name: 'Mary', email: 'mary@email.com', phone: '(403)123-1234', transportation: 'taxi', departure_date: '2021-02-01', return_date: '2021-02-25', number_of_travellers: '4'},
      ]);
    });
};