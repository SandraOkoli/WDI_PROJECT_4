const Chat = require('../models/chat');

//post api chat
function chatsCreate(req, res, next) {
  req.body.users.push(req.currentUser.id);
  Chat
    .create(req.body)
    .then(chat => res.status(200).json(chat))
    .catch(next);
}
// get api  (req.current user no need to pass as params)
function chatsFind(req, res, next) {
  Chat
    .find({
      friends: { $in: [req.currentUser.id] }
    })
    .exec()
    .then(chat => res.status(200).json(chat))
    .catch(next);
}

function chatsShow(req, res, next) {
  Chat
    .findById(req.currentUser.id)
    .exec()
    .then((chat) => {
      if(!chat) return res.notFound();
      res.json(chat);
    })
    .catch(next);
}

// function chatsDelete(req, res, next) {
//
//  }

module.exports = {
  create: chatsCreate,
  find: chatsFind,
  show: chatsShow
  // delete: deleteChat
};
