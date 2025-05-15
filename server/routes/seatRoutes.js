const express = require('express');
const seatController = require('../controllers/seatController');

const router = express.Router();

router.post('/get-seat', seatController.getSeatDetails);

module.exports = router;