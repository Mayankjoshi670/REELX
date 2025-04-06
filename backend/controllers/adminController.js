// controllers/adminController.js
const Reel = require('../models/schema');

const postReel = async (req, res) => {
  try {
    const { url, description } = req.body;
    const newReel = new Reel({ url, description });
    await newReel.save();

    res.status(201).json({ message: "Reel added successfully", reel: newReel });
  } catch (err) {
    res.status(500).json({ message: "Error while adding the reel", error: err.message });
  }
};

module.exports = { postReel };
