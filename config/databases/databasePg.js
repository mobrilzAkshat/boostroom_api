const { Client } = require('pg');

const client = new Client({
    host: "db-postgresql-nyc3-03663-do-user-9698396-0.b.db.ondigitalocean.com",
    port: 25060,
    user: "doadmin",
    password: "2PomsGlHIj1jZ1sF",
    database: "defaultdb",
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 10000, // 5 seconds connection timeout
});

client.connect(err => {
    if (!err) {
        console.log("Connection successful to PostgreSQL");
    } else {
        console.error("Error connecting to PostgreSQL:", err);
    }
});

module.exports = { client };
