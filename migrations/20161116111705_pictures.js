'use strict';

exports.up = function (knex) {
    return knex.schema.table('pictures', function (table) {
      table.string('original_name');
      table.string('encoding');
      table.string('mimetype');
      table.string('destination');
      table.string('path');
      table.integer('size');
    });
};

exports.down = function (knex) {
  return knex.schema.table('pictures', function (table) {
    table.dropColumn('original_name');
    table.dropColumn('encoding');
    table.dropColumn('mimetype');
    table.dropColumn('destination');
    table.dropColumn('path');
    table.dropColumn('size');
  });
};
