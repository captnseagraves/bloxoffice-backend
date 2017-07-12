exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('user_tickets').del()
        .then(function() {
            // Inserts seed entries
            return knex('user_tickets').insert([{
                id: 1,
                user_id: 1,
                event_id: 1,
                tx_hash: '0x556632e6c500f1e656ee1bcc53e726abd3e473cfb7ea973bf834d7ff4d1ab74e',
                ticket_num: 1
            }, {
                id: 2,
                user_id: 1,
                event_id: 2,
                tx_hash: '0x556632e6c500f1e656ee1bcc53e726abd3e473cfb7ea973bf834d7ff4d1ab74e',
                ticket_num: 1
            }, {
                id: 3,
                user_id: 1,
                event_id: 3,
                tx_hash: '0x556632e6c500f1e656ee1bcc53e726abd3e473cfb7ea973bf834d7ff4d1ab74e',
                ticket_num: 1
            }]);
        })
        .then(() => {
    return knex.raw("SELECT setval('user_tickets_id_seq', (SELECT MAX(id) FROM user_tickets));")
  })
};
