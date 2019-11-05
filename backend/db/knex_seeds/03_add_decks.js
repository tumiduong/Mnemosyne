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
          link: 'trWBVy',
        },
        {
          user_id: 1,
          subject_id: 8,
          name: 'Skincare Ingredients',
          description: 'Learning ingredients commonly used in skincare and their benefits.',
          link: 'vrWKVu',
        },
        {
          user_id: 2,
          subject_id: 6,
          name: 'Top 20 Books',
          description: 'Top 20 Books of All Times',
          link: 'aSlDkO',
        },
        {
          user_id: 2,
          subject_id: 7,
          name: 'Top 10 Marvel Movies',
          description: "Dom's favorite movies",
          link: 'MarVeL',
        },
        {
          user_id: 2,
          subject_id: 9,
          name: 'Top 15 Cocktails',
          description: 'Game changer cocktail list',
          link: 'bl2BlA',
        },
        {
          user_id: 2,
          subject_id: 10,
          name: 'Robert Mapplethorpe',
          description: 'Signature Works of Mapplethorpe',
          link: 'tHorPE',
        },
        {
          user_id: 2,
          subject_id: 11,
          name: 'Favorite Soccer Players',
          description: 'Top 5 players',
          link: 's0CcEr',
        },
      ]);
    }),
  ]);
};