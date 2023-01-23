const express = require('express');
const skills = require('../controllers/skills.controller');

const router = express.Router();

router
  .route('/')
  .get(skills.getAllSkills);

module.exports = router;
