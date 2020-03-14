const mongoose = require("mongoose");

// const plantNoteSchema = new mongoose.Schema({
//   timestamp: Number,
//   note: String,
//   health: String
// });

// const plantDetailSchema = new mongoose.Schema({
//   timestamp: Number,
//   detail: {
//     scientificName: String,
//     soilbedLocation: String,
//     season: String,
//     status: String,
//     plantDetailNotes: [plantNoteSchema]
//   }
// });

const plantSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  plantName: {
    type: String,
    default: "",
    required: true
  },

  plantStatus: {
    type: String,
    default: ""
  }

  // plantDetail: [plantDetailSchema]
});

mongoose.model("Plant", plantSchema);
