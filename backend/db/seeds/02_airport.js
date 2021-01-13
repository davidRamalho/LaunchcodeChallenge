exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('airport').del()
    .then(function() {
      // Inserts seed entries
      return knex('airport').insert([
        { name: 'Hartsfield–Jackson Atlanta International Airport', code: 'ATL', city: 'Atlanta, Georgia', country: 'United States'},
        { name: 'Beijing Capital International Airport', code: 'PEK', city: 'Chaoyang-Shunyi, Beijing', country: 'China'},
        { name: 'Los Angeles International Airport', code: 'LAX', city: 'Los Angeles, California', country: 'United States'},
        { name: 'Dubai International Airport', code: 'DXB', city: 'Garhoud, Dubai', country: 'United Arab Emirates'},
        { name: 'Tokyo Haneda Airport', code: 'HND', city: 'Ōta, Tokyo', country: 'Japan'},
        { name: 'O\'Hare International Airport', code: 'ORD', city: 'Chicago, Illinois', country: 'United States'},
        { name: 'London Heathrow Airport', code: 'LHR', city: 'Hillingdon, London', country: 'United Kingdom'},
        { name: 'Shanghai Pudong International Airport', code: 'PVG', city: 'Pudong, Shanghai', country: 'China'},
        { name: 'Charles de Gaulle Airport', code: 'CDG', city: 'Paris', country: 'France'},
        { name: 'Amsterdam Airport Schiphol', code: 'AMS', city: 'Haarlemmermeer, North Holland', country: 'Netherlands'},
        { name: 'Frankfurt Airport', code: 'FRA', city: 'Frankfurt, Hesse', country: 'Germany'},
        { name: 'Madrid Barajas Airport', code: 'MAD', city: 'Barajas, Madrid', country: 'Spain'}
      ]);
    });
};