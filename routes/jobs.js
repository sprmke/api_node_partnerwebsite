const express = require('express');
const router = express.Router();
const jobsController = require('../controllers/jobs');

// GET /jobs
router.get('', jobsController.getJobs);

module.exports = router;