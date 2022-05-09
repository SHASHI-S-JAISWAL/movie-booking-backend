const express = require("express");
const router = express.Router();
const { pool } = require("../ConnectionPool");

router.get("/", async (req, res, next) => {
  try {
    const { location } = req.query;
    const locationQuery = location ? ` && location = '${location}' ` : "";

    const result1 = await pool.query(
      `select * from movies where 1 ${locationQuery} ; `,
      function (err, result) {
        if (err) {
          console.log(err);
        } else {
          res.json(result);
        }
      }
    );
    console.log(result1);
    // res.json(result);
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
});

module.exports = router;
