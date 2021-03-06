const express = require("express");
const router = express.Router();
const { pool } = require("../ConnectionPool");

router.post("/reserve-seat", async (req, res, next) => {
  const { movieId, seatId, userId } = req.query;
  try {
    const data = await pool.query(
      `INSERT INTO reservations ( seatId, movieId, userId) VALUES ('${seatId}', '${movieId}', '${userId}');`,
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
