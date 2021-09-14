var express = require("express");
var router = express.Router();
const BUCKET = require("../models/bucket");
const cors = require("cors");

const bucketList = {
  b_id: "0001",
  b_flag: 0,
  b_title: "Nodejs 연동",
  b_start_date: "2021-09-14 00:00:00",
  b_end_date: "",
  b_end_check: false,
  b_cancel: false,
};

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/insert", async (req, res) => {
  const result = await BUCKET.create(req.body);
  await res.json(result);
});

router.get("/data", async (req, res) => {
  const result = await BUCKET.find({});
  res.json(result);
});

module.exports = router;
