const Chat = require('../models/chat');

function createChat(req, res, next) {
  req.body.users.push(req.currentUser.id);

  Chat
    .create(req.body)
    .then(chat => res.status(200).json(chat))
    .catch(next);
}

// function findChats(req, res, next) {
//
// }
//
// function deleteChat(req, res, next) {
//
// }

module.exports = {
  create: createChat
  // find: findChats,
  // delete: deleteChat
};
