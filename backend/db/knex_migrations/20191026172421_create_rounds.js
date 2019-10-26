
exports.up = function(knex) {
  return knex.schema.createTable('rounds', t => {
    t.increments('id')
      .primary()
      .unsigned();
    t.integer('user_id')
      .unsigned();
    t.integer('deck_id')
      .unsigned();
    t.integer('score')
      .unsigned();
    t.timestamps(true, true);
  
    t.foreign('user_id').references('id').inTable('users');
    t.foreign('deck_id').references('id').inTable('decks');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('rounds');
};
