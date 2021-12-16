const User = require('../models/userModel');

// User Registration - (CREATE)
const register = async (req, res) => {
   try {
      const newUser = new User(req.body);
      await newUser.save();

      res.status(201).json({ user_ID: newUser._id });
   } catch (err) {
      console.log(err.message);
      res.status(500).json(err.message);
   }
};

// Get All Users - (READ)
const getAllUsers = async (req, res) => {
   try {
      const allUsers = await User.find();

      res.status(200).json({
         status: 'success',
         results: allUsers.length,
         users: allUsers,
      });
   } catch (err) {
      console.log(err.message);
      res.status(500).json(err.message);
   }
};

// Update Username - (UPDATE)
const updateUser = async (req, res) => {
   // check if userID in req.params and req.body is the same.
   if (req.params.userId !== req.body.id) {
      return res.status(500).json('You are not authorised');
   }

   try {
      const user = await User.findByIdAndUpdate(
         req.params.userId,
         {
            username: req.body.username,
         },
         { new: true }
      );
      res.status(200).json({
         status: 'success',
         user,
      });
   } catch (err) {
      console.log(err.message);
      res.status(500).json(err.message);
   }
};

// Delete User - (DELETE)
const deleteUser = async (req, res) => {
   if (req.params.userId !== req.body.id) {
      return res.status(500).json('You are not authorised');
   }

   try {
      const user = await User.findByIdAndDelete(req.params.userId);

      if (!user) {
         res.status(404).json('User Not Found');
      } else {
         res.status(200).json('User deleted successfully!');
      }
   } catch (err) {
      console.log(err.message);
      res.status(500).json(err.message);
   }
};

exports.register = register;
exports.getAllUsers = getAllUsers;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
