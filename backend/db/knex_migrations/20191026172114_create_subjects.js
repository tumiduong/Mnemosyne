
exports.up = function(knex) {
  return knex.schema.createTable('subjects', t => {
    t.increments('id')
      .primary()
      .unsigned();
    t.string('name')
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('subjects');
};
