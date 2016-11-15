'use strict';
exports.up = function(knex) {
  return knex.schema.createTable('friends', function (table) {
    table.increments();
    table.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
    table.integer('friend_user_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('friends');
};
