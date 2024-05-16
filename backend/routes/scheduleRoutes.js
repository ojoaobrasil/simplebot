const express = require('express');
const scheduleController = require('../controllers/scheduleController');

const router = express.Router();

router.post('/schedules', scheduleController.createSchedule);
router.get('/schedules', scheduleController.getSchedules);
router.get('/schedules/:id', scheduleController.getScheduleById);
router.put('/schedules/:id', scheduleController.updateSchedule);
router.delete('/schedules/:id', scheduleController.deleteSchedule);

module.exports = router;