// Update with your config settings.

module.exports = {

    development: {
        client: 'pg',
        connection: 'postgres://localhost/bloxoffice'
    },
    test: {
        client: 'pg',
        connection: 'postgres://localhost/bloxoffice-test'
    },
    production: {
        "client": "pg",
        "connection": process.env.DATABASE_URL
    }

};
