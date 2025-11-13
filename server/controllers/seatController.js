const { fetchSeatInfo } = require('../utils/scraper');
const { VENUE_URLS, SESSIONS } = require('../utils/constants');

exports.getSeatDetails = async (req, res) => {
  const { date, registerNumber } = req.body;

  if (!date || !registerNumber) {
    return res.status(400).json({ error: 'Missing date or register number' });
  }

  try {
    const searchPromises = [];
    
    for (const session of SESSIONS) {
      for (const [venue, url] of Object.entries(VENUE_URLS)) {
        searchPromises.push(
          fetchSeatInfo(url, venue, date, session, registerNumber)
            .then(result => result ? { result, found: true } : { found: false })
            .catch(() => ({ found: false }))
        );
      }
    }
    
    const results = await Promise.allSettled(searchPromises);
    const foundSeat = results
      .filter(r => r.status === 'fulfilled' && r.value.found)
      .map(r => r.value.result)[0];
    
    if (foundSeat) {
      return res.json({ success: true, seatDetails: foundSeat });
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