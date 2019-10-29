exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('users').del(),
    knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1'),
    knex('users').then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          first_name: 'Bill',
          last_name: 'Gates',
          email: 'test@test.com',
          password: '$2b$10$8ey67jAl9hdD5CEaxTlZdOwwl4mVww.WZQgm.H7KE44heXIS22DNm',
        },
      ]);
    }),
  ]);
};