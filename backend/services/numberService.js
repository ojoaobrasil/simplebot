const Number = require('../models/Number');

exports.createNumber = async (data) => {
  const number = new Number(data);
  return await number.save();
};

exports.getNumbers = async () => {
  return await Number.find({});
};