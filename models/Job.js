import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, 'Please provide company name'],
      maxlength: 20,
    },
    position: {
      type: String,
      required: [true, 'Please provide position name'],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ['interview', 'declined', 'pending'],
      default: 'pending',
    },
    jobType: {
      type: String,
      enum: ['full-time', 'part-time', 'remote', 'internship'],
      default: 'full-time',
    },
    location: {
      type: String,
      default: 'my city',
      required: [true, 'Please provide location'],
      maxlength: 20,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user id'],
    },
  },
  { timestamps: true }
);

export default mongoose.model('Job', JobSchema);
