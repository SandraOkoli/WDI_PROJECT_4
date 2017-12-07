const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const friendsPlugin = require('mongoose-friends-plugin');

const messageSchema = new mongoose.Schema({
  sentBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true }
});

messageSchema.methods.belongsTo = function messageBelongsTo(user) {
  if(typeof this.createdBy.id === 'string') return this.createdBy.id === user.id;
  return user.id === this.createdBy.toString();
};

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  username: { type: String, required: true, trim: true, unique: true },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String },
  image: { type: String, required: true, trim: true },
  bio: { type: String, required: true, trim: true },
  genre: { type: String, required: true, trim: true },
  location: { type: String, required: true },
  type: { type: String, required: true },
  skillLevel: { type: String, required: true },
  socialLinks: {
    facebook: { type: String },
    instagram: {type: String },
    twitter: { type: String  }
  },
  stars: { type: Number },
  messages: [messageSchema]
});

userSchema.plugin(friendsPlugin());

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema.pre('validate', function checkPassword(next) {
  if(!this._passwordConfirmation || this._passwordConfirmation !== this.password) {
    this.invalidate('passwordConfirmation', 'Passwords do not match');
  }
  next();
});

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
