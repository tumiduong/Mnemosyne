
exports.up = function(knex) {
  return knex.schema.createTable('users', t => {
    t.increments('id')
      .primary()
      .unsigned();
    t.string('first_name')
      .notNullable();
    t.string('last_name')
      .notNullable();
    t.string('email')
      .notNullable();
    t.string('password')
      .notNullable();
    t.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
