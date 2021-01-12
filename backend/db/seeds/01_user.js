exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function() {
      // Inserts seed entries
      return knex('user').insert([
        { name: 'Some Guy', email: 'email1@test.com', phone: '(123)456-7890'},
        { name: 'Some Girl', email: 'email2@test.com', phone: '(123)456-0987'},
        { name: 'Someone Else', email: 'email3@test.com', phone: '(123)456-0879'},
      ]);
    });
};