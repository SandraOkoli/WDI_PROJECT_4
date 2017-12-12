const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  users: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  messages: [{ type: mongoose.Schema.ObjectId, ref: 'Message'}]
});

module.exports = mongoose.model('Chat', chatSchema);
