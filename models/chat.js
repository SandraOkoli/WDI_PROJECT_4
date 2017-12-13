const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  friends: [{
    type: mongoose.Schema.ObjectId, ref: 'User',
    required: true,
    validate: [mustBeTwo, 'Please contain two users.']
  }],
  messages: [{
    sender: { type: mongoose.Schema.ObjectId, ref: 'User' },
    content: { type: String }
  }]
});

function mustBeTwo() {
  const self = this;
  return self.friends.length === 2;
}

chatSchema.index({friends: 1}, {unique: true});

module.exports = mongoose.model('Chat', chatSchema);
