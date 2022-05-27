const express = require("express");
const router = express.Router();
const { pool } = require("../ConnectionPool");

router.get("", async (req, res, next) => {
  const { userId } = req.query;
  try {
    const data = await pool.query(
      `select reservations.seatId, movies.* from reservations , movies where reservations.userID = "${userId}" && movies.id = reservations.movieId ;`,
      function (err, result) {
        if (err) {
          console.log(err);
        } else {
          res.json(result);
        }
      }
    );
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
});

module.exports = router;
