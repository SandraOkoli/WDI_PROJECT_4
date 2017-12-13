const router = require('express').Router();
const auth = require('../controllers/auth');
const user = require('../controllers/user');
const chats = require('../controllers/chats');
const secureRoute = require('../lib/secureRoute');

router.route('/chats')
  .post(secureRoute, chats.create);

router.route('/users')
  .get(user.index);

router.route('/users/:id')
  .get(user.show)
  .put(user.edit)
  .delete(user.delete);

router.route('/users/:id/friends')
  .get(secureRoute, user.getFriends)
  .post(secureRoute, user.requestFriends)
  .put(secureRoute, user.removeFriends);

router.route('/chats')
  .get(secureRoute, chats.find);

router.route('/chats/:id')
  .get(secureRoute, chats.show)
  .delete(secureRoute, chats.delete);

router.route('/users/:id/chats')
  .post(secureRoute, chats.create);

// router.route('/chats/:id/messages')
//   .post(secureRoute, messages.create);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/*')
  .all((req, res) => res.notFound());

module.exports = router;
