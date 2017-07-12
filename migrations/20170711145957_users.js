exports.up = function(knex) {
    return knex.schema.createTable('users', (tbl) => {
        tbl.increments();
        tbl.string('name').notNullable();
        tbl.string('wallet_address').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
