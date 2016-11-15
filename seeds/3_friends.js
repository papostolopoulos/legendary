
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('friends').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('friends').insert({
          id: 1,
          user_id: 1,
          friend_user_id: 2
          }),
        knex('friends').insert({
          id: 2,
          user_id: 2,
          friend_user_id: 1
          })
      ]);
    });
};
