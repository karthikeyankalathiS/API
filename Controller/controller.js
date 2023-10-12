const technicalskills = require('../Model/skill');

exports.TechnicalSkill = async (req, res) => {
  try {
    const skills = await technicalskills.find({});
    res.json(skills);

  } catch (err) {
    console.error('Error retrieving technical skills:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
