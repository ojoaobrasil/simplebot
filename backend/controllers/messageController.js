const Message = require('../models/Message');

exports.createMessage = async (req, res) => {
  try {
    const message = new Message(req.body);
    await message.save();
    res.status(201).send(message);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find({});
    res.status(200).send(messages);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getMessageById = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    if (!message) {
      return res.status(404).send({ error: 'Message not found' });
    }
    res.status(200).send(message);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateMessage = async (req, res) => {
  try {
    const message = await Message.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!message) {
      return res.status(404).send({ error: 'Message not found' });
    }
    res.status(200).send(message);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteMessage = async (req, res) => {
  try {
    const message = await Message.findByIdAndDelete(req.params.id);
    if (!message) {
      return res.status(404).send({ error: 'Message not found' });
    }
    res.status(200).send({ message: 'Message deleted successfully' });
  } catch (error) {
    res.status(500).send(error);
  }
};