const mongoose = require('mongoose');

const autoReplySchema = new mongoose.Schema({
  keyword: { type: String, required: true },
  reply: { type: String, required: true },
});

const AutoReply = mongoose.model('AutoReply', autoReplySchema);

module.exports = AutoReply;