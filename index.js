const sql = require("mysql");
const { pool } = require("./ConnectionPool");
var express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");
const getMovies = require("./routes/getMovies");
const seats = require("./routes/seats");
const reservations = require("./routes/reservations");

var app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
// const ProfileData = require("./controller/profile");
// app.use("/", ProfileData);
app.listen(5000, function () {
  console.log("Server is running..");
});

app.use("/movies", getMovies);
app.use("/seats", seats);
app.use("/reservations", reservations);

app.get("/url", async (req, res, next) => {
  try {
    const result = await pool
      .request()
      .query("select * from tblProfile", function (err, profileset) {
        if (err) {
          console.log(err);
        } else {
          var send_data = profileset.recordset;
          res.json(send_data);
        }
      });
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
});
