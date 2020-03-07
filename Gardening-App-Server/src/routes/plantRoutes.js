const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");

const Plant = mongoose.model("Plant");

const router = express.Router();

router.use(requireAuth);

router.get("/plants", async (req, res) => {
  const plants = await Plant.find({ userId: req.user._id });

  res.send(plants);
});

router.post("/plants", async (req, res) => {
  const { plantName, plantDetail } = req.body;

  if (!plantName) {
    return res.status(422).send({ error: "You must atleast include a name." });
  }

  try {
    const plant = new Plant({ plantName, plantDetail, userId: req.user._id });
    await plant.save();
    res.send(plant);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

module.exports = router;
