const Meeting = require('../models/meetingModel');

// Create new meeting - (CREATE)
const createMeeting = async (req, res) => {
   // destructuring req.body
   const { uid1, uid2, date } = req.body;

   try {
      const newMeeting = new Meeting({
         userID_1: uid1,
         userID_2: uid2,
         date,
      });
      newMeeting.save();

      res.status(201).json({ meeting_ID: newMeeting._id });
   } catch (err) {
      console.log(err.message);
      res.status(500).json(err.message);
   }
};

// Fetch All Meetings - (READ)
const getAllMeetings = async (req, res) => {
   try {
      const allMeetings = await Meeting.find();

      res.status(200).json({
         status: 'success',
         results: allMeetings.length,
         meeting_list: allMeetings,
      });
   } catch (err) {
      console.log(err.message);
      res.status(500).json(err.message);
   }
};

// Update meeting - (UPDATE)
const updateMeeting = async (req, res) => {
   try {
      const meeting = await Meeting.findByIdAndUpdate(
         req.params.meetingId,
         req.body,
         { new: true }
      );

      if (!meeting) {
         res.status(404).json('Incorrect Meeting ID');
      } else {
         res.status(200).json({
            status: 'success',
            meeting,
         });
      }
   } catch (err) {
      console.log(err.message);
      res.status(500).json(err.message);
   }
};

// delete meeting - (DELETE)
const deleteMeeting = async (req, res) => {
   try {
      const meeting = await Meeting.findByIdAndDelete(req.params.meetingId);

      if (!meeting) {
         res.status(404).json('Incorrect Meeting ID');
      } else {
         res.status(200).json('Meeting deleted successfully!');
      }
   } catch (err) {
      console.log(err.message);
      res.status(500).json(err.message);
   }
};

exports.createMeeting = createMeeting;
exports.getAllMeetings = getAllMeetings;
exports.updateMeeting = updateMeeting;
exports.deleteMeeting = deleteMeeting;
