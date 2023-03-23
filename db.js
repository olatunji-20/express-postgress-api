const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "db", //host changed to db(instead of localhost) because of docker service(db)
    database: "cfc",
    password: "ola",
    port: 5432
});

module.exports = pool;