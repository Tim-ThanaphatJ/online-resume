const mongoose = require('mongoose');

const Skillschema = new mongoose.Schema({
  header: {
    type: String,
    unique: true,
    require: [true, 'Header must be provided'],
    trim: true,
    maxLength: [30, 'Header cannot be more than 30'],
  },
  skills: [String],
});

module.exports = mongoose.model('Skill', Skillschema);
