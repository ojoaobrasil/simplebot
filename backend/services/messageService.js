const Message = require('../models/Message');

exports.createMessage = async (data) => {
  const message = new Message(data);
  return await message.save();
};

exports.getMessages = async () => {
  return await Message.find({});
};