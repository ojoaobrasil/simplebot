const AutoReply = require('../models/AutoReply');

exports.createAutoReply = async (req, res) => {
  try {
    const autoReply = new AutoReply(req.body);
    await autoReply.save();
    res.status(201).send(autoReply);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getAutoReplies = async (req, res) => {
  try {
    const autoReplies = await AutoReply.find({});
    res.status(200).send(autoReplies);
  } catch (error) {
    res.status(500).send(error);
  }
};