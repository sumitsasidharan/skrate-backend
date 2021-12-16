const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
   userID_1: { type: mongoose.ObjectId, required: true },
   userID_2: { type: mongoose.ObjectId, required: true },
   date: { type: Date },
});

module.exports = mongoose.model('Meeting', meetingSchema);
