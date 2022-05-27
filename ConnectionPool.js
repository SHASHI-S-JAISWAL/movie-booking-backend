// DB.js config for your database
const sql = require("mysql");
const config = {
  user: "testserver1996",
  password: "testserver1996",
  host: "db4free.net",
  database: "testserver1996",
  connectionLimit: 1000,
  connectTimeout: 60 * 60 * 1000,
  acquireTimeout: 60 * 60 * 1000,
  timeout: 60 * 60 * 1000,
  multipleStatements: true,
};
const pool = new sql.createPool(config);
pool.getConnection((err, connection) => {
  if (err) throw err;
  console.log("Database connected successfully");
  connection.release();
});

module.exports = { pool };
