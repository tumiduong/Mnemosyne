exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('rounds').del(),
    knex.raw('ALTER SEQUENCE rounds_id_seq RESTART WITH 1'),
    knex('rounds').then(function() {
      // Inserts seed entries
      return knex('rounds').insert([
        {
          user_id: 1,
          deck_id: 1,
          score: 93
        },
        {
          user_id: 1,
          deck_id: 1,
          score: 100
        },
        {
          user_id: 1,
          deck_id: 2,
          score: 80
        },
        {
          user_id: 1,
          deck_id: 3,
          score: 82
        },
        {
          user_id: 1,
          deck_id: 3,
          score: 73
        },
      ]);
    }),
  ]);
};