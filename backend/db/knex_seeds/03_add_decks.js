exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('decks').del(),
    knex.raw('ALTER SEQUENCE decks_id_seq RESTART WITH 1'),
    knex('decks').then(function() {
      // Inserts seed entries
      return knex('decks').insert([
        {
          user_id: 1,
          subject_id: 3,
          name: 'Periodic Table of Elements',
          description: 'Memorizing the elements in the Periodic Table.',
          link: '8k2hs1',
        },
        {
          user_id: 1,
          subject_id: 5,
          name: 'Fluid Mechanics',
          description: 'Terms in fluid mechanics.',
          link: 'JoLE2a',
        },
        {
          user_id: 1,
          subject_id: 2,
          name: 'Organ Systems',
          description: 'Understanding the 11 organ systems in the human body.',
          link: 'vrWKVu',
        },
      ]);
    }),
  ]);
};