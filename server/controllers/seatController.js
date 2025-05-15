const { fetchSeatInfo } = require('../utils/scraper');
const { VENUE_URLS, SESSIONS } = require('../utils/constants');

exports.getSeatDetails = async (req, res) => {
  const { date, registerNumber } = req.body;

  if (!date || !registerNumber) {
    return res.status(400).json({ error: 'Missing date or register number' });
  }

  try {
    for (const session of SESSIONS) {
      for (const [venue, url] of Object.entries(VENUE_URLS)) {
        try {
          const seatInfo = await fetchSeatInfo(url, venue, date, session, registerNumber);
          
          if (seatInfo) {
            return res.json({ success: true, seatDetails: seatInfo });
          }
        } catch (err) {
          console.warn(`Failed on venue ${venue}, session ${session}: ${err.message}`);
        }
      }
    }

    return res.status(404).json({ 
      success: false, 
      message: 'Register number not found in any venue/session for this date' 
    });
  } catch (error) {
    console.error('Error in getSeatDetails:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};