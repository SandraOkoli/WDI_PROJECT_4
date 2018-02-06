const Chat = require('../models/chat');


// GET /chats/:id
function chatsShow(req, res, next) {
  Chat
    .findById(req.params.id)
    .exec()
    .then((chat) => {
      if(!chat) return res.notFound();
      res.json(chat);
    })
    .catch(next);
}

// POST /users/:id/chats
function chatCreate(req, res, next) {

  req.body.users = [req.currentUser.id, req.params.id];
  
  Chat
    .create(req.body)
    .then(user => res.status(201).json(user))
    .catch(next);
}

// POST /chats/:id/messages
function chatMessagesCreate(req, res, next) {
  Chat
    .findById(req.params.id)
    .then(chat => {
      const message = chat.messages.create(req.body);
      chat.messages.push(message);
      chat.save()
        .then(() => res.json(message));
    })
    .catch(next);
}

function chatsFind(req, res, next) {
  Chat
    .find({
      users: { $in: [req.currentUser.id]}
    })
    .populate('users')
    .exec()
    .then(chat => res.status(200).json(chat))
    .then(console.log({res}))
    .catch(next);
}

function chatsDelete(req, res, next) {
  Chat
    .findByIdAndRemove(req.params.id)
    .exec()
    .then(() => res.status(200).json({message: 'successfully deleted'}))
    .catch(next);
}

//posting an individual message

module.exports = {
  find: chatsFind,
  show: chatsShow,
  create: chatCreate,
  delete: chatsDelete,
  messagesCreate: chatMessagesCreate
};
