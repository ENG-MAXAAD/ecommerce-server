const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: {type: String},
  photo:  {
    type: [],
    default: [
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    ],
  },
});

module.exports = mongoose.model("Banner", bannerSchema);
