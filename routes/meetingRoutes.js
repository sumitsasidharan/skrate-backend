const router = require('express').Router();
const {
   createMeeting,
   getAllMeetings,
   updateMeeting,
   deleteMeeting,
} = require('../controllers/meetingController');

router.post('/new', createMeeting);
router.get('/all', getAllMeetings);
router.put('/update/:meetingId', updateMeeting);
router.delete('/:meetingId', deleteMeeting);

module.exports = router;
