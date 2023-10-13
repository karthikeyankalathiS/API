const technicalskills = require('../Model/skill');

exports.TechnicalSkill = async (req, res) => {
  try {
    const skills = await technicalskills.find({});
    const skillset = skills.map(skill => skill.skill)
    res.json(skillset);

  } catch (err) {
    console.error('Error retrieving technical skills:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
