exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('subjects').del(),
    knex.raw('ALTER SEQUENCE subjects_id_seq RESTART WITH 1'),
    knex('subjects').then(function() {
      // Inserts seed entries
      return knex('subjects').insert([
        {
          name: 'English',
        },
        {
          name: 'Biology',
        },
        {
          name: 'Chemistry',
        },
        {
          name: 'Physics',
        },
        {
          name: 'Engineering',
        },
        {
          name: 'Literature',
        },
        {
          name: 'Cinema',
        },
        {
          name: 'Cosmetics',
        },
        { 
          name: 'Cocktails',
        },
        {
          name: 'Photography',
        },
        {
          name: 'Sports',
        },
        {
          name: 'Anime',
        },
        {
          name: 'Dogs',
        }
      ]);
    }),
  ]);
};