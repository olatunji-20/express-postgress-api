const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "db",
    database: "cfc",
    password: "ola",
    port: 5432
});
// host changed to db(instead of localhost) because of docker services
module.exports = pool;