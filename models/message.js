const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.ObjectId, ref: 'User' },
  body: { type: String }
});

module.exports = mongoose.model('Chat', messageSchema);
