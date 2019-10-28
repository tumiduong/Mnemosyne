
exports.up = function(knex) {
  return knex.schema.createTable('cards', t => {
    t.increments('id')
      .primary()
      .unsigned();
    t.integer('deck_id')
      .unsigned();
    t.string('term')
      .notNullable();
    t.string('definition');
    t.string('image');
  
    t.foreign('deck_id').references('id').inTable('decks').onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('cards');
};
