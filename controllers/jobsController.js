import Job from '../models/Job.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, UnAuthenticatedError } from '../errors/index.js';

const createJob = async (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    throw new BadRequestError('Please provide company and position');
  }
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const deleteJob = async (req, res) => {
  res.send('delete job');
};

const getAllJobs = async (req, res) => {
  res.send('get all jobs');
};

const updateJob = async (req, res) => {
  res.send('update job');
};

const showStats = (req, res) => {
  res.send('show stats');
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
