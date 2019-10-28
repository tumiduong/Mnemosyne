
exports.up = function(knex) {
  return knex.schema.createTable('decks', t => {
    t.increments('id')
      .primary()
      .unsigned();
    t.integer('user_id')
      .unsigned();
    t.integer('subject_id')
      .unsigned();
    t.string('name')
      .notNullable();
    t.string('description');
    t.string('link');
    t.timestamps(true, true);
  
    t.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
    t.foreign('subject_id').references('id').inTable('subjects').onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('decks');
};
