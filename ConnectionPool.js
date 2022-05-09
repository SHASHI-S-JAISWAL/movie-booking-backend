// DB.js config for your database
const sql = require("mysql");
const config = {
  user: "sql6490919",
  password: "",
  host: "sql6.freesqldatabase.com",
  database: "sql6490919",
  multipleStatements: true,
};
const pool = new sql.createPool(config);
pool.getConnection((err, connection) => {
  if (err) throw err;
  console.log("Database connected successfully");
  connection.release();
});

module.exports = { pool };
