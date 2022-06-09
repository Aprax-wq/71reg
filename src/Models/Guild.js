const { Schema, model } = require("mongoose");

const Guild = Schema({
  SunucuID: String,
  yTags: {
    type: Array,
    default: []
  },
});

module.exports = model("Guild", Guild);