exports.up = function(knex) {
    return knex.schema.createTable('events', (tbl) => {
        tbl.increments();
        tbl.integer('owner_id').notNullable();
        tbl.foreign('owner_id').references('users.id');
        tbl.string('contract_address').notNullable();
        tbl.string('event_description').notNullable();
        tbl.string('event_name').notNullable();
        tbl.string('event_location').notNullable();
        tbl.string('image_URL').notNullable();
        tbl.integer('quota').notNullable();
        tbl.integer('ticket_price').notNullable();
        tbl.integer('tickets_remaining').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('events');
};
