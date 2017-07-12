exports.up = function(knex) {
    return knex.schema.createTable('user_tickets', (tbl) => {
        tbl.increments();
        tbl.integer('user_id').notNullable();
        tbl.foreign('user_id').references('users.id');
        tbl.integer('event_id').notNullable();
        tbl.foreign('event_id').references('events.id');
        tbl.string('tx_hash').notNullable();
        tbl.integer('ticket_num').notNullable();

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('user_tickets');
};
  
