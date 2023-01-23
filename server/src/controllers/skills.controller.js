const { StatusCodes } = require('http-status-codes');
const Skill = require('../models/skills.model');

const { NotFoundError } = require('../utils/errors');

const getAllSkills = async (req, res) => {
  const skills = await Skill.find({})
    .orFail(new NotFoundError('Skills were not found'));

  res.status(StatusCodes.OK).json({ skills });
};

module.exports = {
  getAllSkills,
};
