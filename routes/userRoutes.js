const router = require('express').Router();
const { register, getAllUsers } = require('../controllers/userController');

router.post('/new', register);
router.get('/all', getAllUsers);

module.exports = router;
