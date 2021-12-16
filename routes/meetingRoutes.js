const router = require('express').Router();
const {
   createMeeting,
   getAllMeetings,
} = require('../controllers/meetingController');

router.post('/new', createMeeting);
router.get('/all', getAllMeetings);

module.exports = router;
