const express = require("express");
const router = express.Router();
const { pool } = require("../ConnectionPool");

router.get("/", async (req, res, next) => {
  const { movieId } = req.query;
  // console.log(req, "yyyyyyy");
  try {
    const data = await pool.query(
      //   `select * from seats ; select * from reservations where reservations.movieId = ${movieId} ;`,
      `select seats.*,reservations.reservationId from seats left join reservations on reservations.movieId = ${movieId} && reservations.seatId = seats.seatId`,
      // 'ALTER TABLE reservations modify reservationId INT NOT NULL AUTO_INCREMENT;',
      function (err, result) {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
          res.json(result);
        }
      }
    );
    console.log(data);
    // res.json(result);
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
});

module.exports = router;
