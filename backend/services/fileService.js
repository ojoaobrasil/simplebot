const File = require('../models/File');

exports.uploadFile = async (data) => {
  const file = new File(data);
  return await file.save();
};

exports.getFiles = async () => {
  return await File.find({});
};