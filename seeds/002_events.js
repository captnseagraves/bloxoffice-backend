exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('events').del()
        .then(function() {
            // Inserts seed entries
            return knex('events').insert([{
                id: 1,
                owner_id: 1,
                contract_address: '0xc14ef837a79ccd3be3b8c6b8a73e766a701a4049',
                event_description: "Joshua is happy",
                event_name: "Ice Cream Time",
                event_location: "Fior d'latte",
                image_URL: "http://static3.businessinsider.com/image/57976c9d4321f1362f8ba44d-1190-625/i-tested-11-of-new-yorks-most-popular-ice-cream-spots--heres-the-verdict.jpg",
                quota: 1,
                ticket_price: 2,
                tickets_remaining: 0
            }, {
              id: 2,
              owner_id: 1,
              contract_address: '0xc14ef837a79ccd3be3b8c6b8a73e766a701a4049',
              event_description: "Joshua is tired",
              event_name: "Nap Time",
              event_location: "His bedroom",
              image_URL: "https://cdn-images.threadless.com/threadless-shop/products/6319/1272x920design_01.jpg",
              quota: 29,
              ticket_price: 45,
              tickets_remaining: 30
          }, {
            id: 3,
            owner_id: 1,
            contract_address: '0xc14ef837a79ccd3be3b8c6b8a73e766a701a4049',
            event_description: "Joshua is hungry",
            event_name: "Dinner Time",
            event_location: "The kitchen",
            image_URL: "https://www.pets4homes.co.uk/images/articles/880/large/dogs-and-dinnertime-dogs-and-their-attitude-to-food-51d04b377a7eb.jpg",
            quota: 3,
            ticket_price: 3,
            tickets_remaining: 3
        }]);
        })
        .then(() => {
    return knex.raw("SELECT setval('events_id_seq', (SELECT MAX(id) FROM events));")
  })
};
