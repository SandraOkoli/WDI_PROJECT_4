const User = require('../models/user');

//Index route
function userIndex(req, res, next) {
  User
    .find()
    .populate('chats')
    .exec()
    .then(users => res.json(users))
    .catch(next);
}

//Show Route
function userShow(req, res, next) {
  User
    .findById(req.params.id)
    .populate('friends chats')
    .then((user) => {
      if (!user) return res.notFound();
      res.json(user);
    })
    .catch(next);

}

//Edit Route - Objects in react are immutable, we must create a new instance of the object.

function userEdit(req, res, next) {
  User
    .findById(req.params.id)
    .then((user) => {
      if (!user) return res.notFound();
      user = Object.assign(user,req.body);
      return user.save();
    })
    .then(user => res.json(user))
    .catch(next);
}

//Delete Route
function userDelete(req, res, next) {
  User
    .findById(req.params.id)
    .exec()
    .then((user)=> {
      if (!user) return res.notFound();
      return user.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}



// Friends

// POST /api/users/:id/friends/requests
function userRequestFriends(req, res, next) {
  User
    .requestFriend(req.currentUser._id, req.params.id)
    .then(() => User.getFriends(req.currentUser))
    .then(friendships => res.json(friendships))
    .catch(next);
}

// PUT /api/users/:id/friends
function userRemoveFriends(req, res, next) {
  User
    .removeFriend(req.currentUser._id, req.params.id)
    .then(() => User.getFriends(req.currentUser))
    .then(friendships => res.json(friendships))
    .catch(next);
}

// GET /api/users/:id/friends
function userGetFriends(req, res, next) {
  User
    .getFriends(req.currentUser._id, req.params.id)
    .then(friendships => res.json(friendships))
    .catch(next);
}


module.exports = {
  index: userIndex,
  show: userShow,
  edit: userEdit,
  delete: userDelete,
  requestFriends: userRequestFriends,
  removeFriends: userRemoveFriends,
  getFriends: userGetFriends

  // createMessage: createMessage
};
