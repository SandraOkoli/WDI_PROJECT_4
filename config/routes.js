const router = require('express').Router();
const auth = require('../controllers/auth');
const user = require('../controllers/user');
const chats = require('../controllers/chats');
const secureRoute = require('../lib/secureRoute');

router.route('/chats')
  .post(chats.create);

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


router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/*')
  .all((req, res) => res.notFound());

module.exports = router;
