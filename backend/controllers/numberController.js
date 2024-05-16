const Number = require('../models/Number');

exports.createNumber = async (req, res) => {
  try {
    const number = new Number(req.body);
    await number.save();
    res.status(201).send(number);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getNumbers = async (req, res) => {
  try {
    const numbers = await Number.find({});
    res.status(200).send(numbers);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getNumberById = async (req, res) => {
  try {
    const number = await Number.findById(req.params.id);
    if (!number) {
      return res.status(404).send({ error: 'Number not found' });
    }
    res.status(200).send(number);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateNumber = async (req, res) => {
  try {
    const number = await Number.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!number) {
      return res.status(404).send({ error: 'Number not found' });
    }
    res.status(200).send(number);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteNumber = async (req, res) => {
  try {
    const number = await Number.findByIdAndDelete(req.params.id);
    if (!number) {
      return res.status(404).send({ error: 'Number not found' });
    }
    res.status(200).send({ message: 'Number deleted successfully' });
  } catch (error) {
    res.status(500).send(error);
  }
};