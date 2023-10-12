const express = require('express');
const router = express.Router();
const { TechnicalSkill } = require('../Controller/controller');

router.get('/api/technical-skills', TechnicalSkill);

module.exports = router;