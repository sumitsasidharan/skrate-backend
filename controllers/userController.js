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

// Delete User - (DELETE)

exports.register = register;
exports.getAllUsers = getAllUsers;
