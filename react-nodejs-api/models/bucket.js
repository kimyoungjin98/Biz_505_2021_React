/**
 * mongoDB는 스키마를 만들지 않는 전톡적 NoSQL
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bucket = Schema({
  b_id: String,
  b_flag: Number,
  b_start_date: String,
  b_title: String,
  b_end_date: String,
  b_end_check: Boolean,
  b_cancel: Boolean,
});

module.exports = mongoose.model("bucketList", bucket);
