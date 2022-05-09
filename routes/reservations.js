const express = require("express");
const router = express.Router();
const { pool } = require("../ConnectionPool");

router.post("/reserve-seat", async (req, res, next) => {
  const { movieId, seatId } = req.query;
  // console.log("----------", req.body, req.query, movieId, seatId);
  // console.log(req, "yyyyyyy");
  try {
    const data = await pool.query(
      //   `select * from seats ; select * from reservations where reservations.movieId = ${movieId} ;`,
      `INSERT INTO reservations ( seatId, movieId, data, data2) VALUES ('${seatId}', '${movieId}',  '', '');`,
      function (err, result) {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
          res.json(result);
        }
      }
    );
    // console.log(data);
    // res.json(result);
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
});

module.exports = router;
