const File = require('../models/File');

exports.uploadFile = async (req, res) => {
  try {
    const file = new File({ path: req.file.path });
    await file.save();
    res.status(201).send(file);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getFiles = async (req, res) => {
  try {
    const files = await File.find({});
    res.status(200).send(files);
  } catch (error) {
    res.status(500).send(error);
  }
};