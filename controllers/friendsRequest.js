// const User = require('../models/user');
//
// // Request
// // POST /requests
// // body: {
// //   receiver:
// // }
//
// //Creates a request
// //Only push a connect request that is not already in the array of friends or rejections
// //If a request has already been sent throw an error
// function create(req, res, next) {
//   User
//     .findOne({
//       _id: req.body.receiver,
//       accepted: { $nin: [req.body.receiver] },
//       rejections: { $nin: [req.body.receiver] }
//     })
//     .exec()
//     .then(receiver => {
//       if (!receiver) {
//         const err = new Error('Already sent');
//         throw err;
//       }
//       receiver.requests.addToSet(req.user._id);
//       return receiver.save();
//     })
//     .then(receiver => {
//       req.user.addToSet(receiver._id);
//       return req.user.save();
//     })
//     .then(sender => {
//       return res.status(200).json(sender);
//       //display message
//     })
//     .catch(next);
// }
//
// // Accept
// // GET /requests/:id/accept
// function accept(req, res, next) {
//   req.user.requests.pull(req.user._id);
//   req.accepted.addToSet(req.params.id);
//   req.user
//     .save()
//     .then(user => {
//       return res.status(200).json(user);
//       //display message
//     })
//     .catch(next);
// }
//
// // reject
// // GET /requests/:id/reject
// function reject(req, res, next) {
//   req.user.requests.pull(req.user._id);
//   req.rejections.addToSet(req.params.id);
//   req.user
//     .save()
//     .then(user => {
//       return res.status(200).json(user);
//     })
//     .catch(next);
// }
//
//
// module.exports = {
//   create: create,
//   accept: accept,
//   reject: reject
// };
// // function create(req, res, next) {
// //   User
// //     .findOne({
// //       _id: req.body.receiver,
// //       friends: { $nin: [req.body.receiver] },
// //       rejections: { $nin: [req.body.receiver] }
// //     })
// //     .exec()
// //     .then(receiver => {
// //       if (!receiver) {
// //         const err = new Error('Already sent');
// //         throw err;
// //       }
// //       receiver.requests.addToSet(req.user._id);
// //       return receiver.save();
// //     })
// //     .then(receiver => {
// //       req.user.addToSet(receiver._id);
// //       return req.user.save();
// //     })
// //     .then(sender => {
// //       return res.status(200).json(sender);
// //     })
// //     .catch(next);
// // }
// //
// // // Accept
// // // GET /friends/:id/accept
// // function accept(req, res, next) {
// //   req.user.requests.pull(req.user._id);
// //   req.friends.addToSet(req.params.id);
// //   req.user
// //     .save()
// //     .then(user => {
// //       return res.status(200).json(user);
// //     })
// //     .catch(next);
// // }
// //
// // // reject
// // // GET /friends/:id/reject
// // function reject(req, res, next) {
// //   req.user.requests.pull(req.user._id);
// //   req.rejections.addToSet(req.params.id);
// //   req.user
// //     .save()
// //     .then(user => {
// //       return res.status(200).json(user);
// //     })
// //     .catch(next);
// // }
// //
// //
// // module.exports = {
// //   create: create,
// //   accept: accept,
// //   reject: reject
// // };

//Routes

//Connections request
//secureRoute
// router.route('/requests')
//   .post(user.create);
//
// router.route('/requests/:id/accept')
//   .get(user.accept);
//
// router.route('/requests/:id/reject')
//   .get(user.reject);
