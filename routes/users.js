var express = require("express");
var router = express.Router();
const { getAll } = require("./../controllers/user");
/* GET users listing. */

router.get("/api", getAll);

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
