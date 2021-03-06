
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('pets', function(table) {
    table.dropColumns('id','name','species','location','age','description','user_id','isFound','image','contact','date','isRecovered');
  });
};

exports.down = function(knex, Promise) {
  // Doesn't matter what goes here: will never run rollback from this migration
  return knex.schema.alterTable('pets', function(table) {
    table.dropColumns('phone_number');
  });
};
