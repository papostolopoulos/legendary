'use strict';
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('username').unique();
    table.string('facebook_user_name').notNullable().unique();
    table.string('first_name');
    table.string('last_name');
    table.string('email').unique();
    table.date('date_of_birth');
    table.string('profile_picture', 4000);
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
