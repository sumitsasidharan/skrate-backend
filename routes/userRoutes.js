const router = require('express').Router();
const {
   register,
   getAllUsers,
   updateUser,
   deleteUser,
} = require('../controllers/userController');

router.post('/new', register);
router.get('/all', getAllUsers);
router.put('/update/:userId', updateUser);
router.delete('/:userId', deleteUser);

module.exports = router;
