const mongoose = require('mongoose');

// Define a Mongoose Schema for technical skills
const technicalSkillSchema = new mongoose.Schema({
  skill: String,
});

module.exports = mongoose.model("technicalskill",technicalSkillSchema)

