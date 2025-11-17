require('dotenv').config();

exports.VENUE_URLS = {
  tp: process.env.VENUE_URL_TP,
  tp2: process.env.VENUE_URL_TP2,
  main: process.env.VENUE_URL_MAIN,
  bio: process.env.VENUE_URL_BIO,
  ub: process.env.VENUE_URL_UB,
  fshet: process.env.VENUE_URL_FSHET,
};

exports.SESSIONS = ["FN", "AN"];