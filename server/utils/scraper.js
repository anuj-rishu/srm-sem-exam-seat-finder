const axios = require("axios");
const cheerio = require("cheerio");

exports.fetchSeatInfo = async (url, venue, date, session, registerNumber) => {
  const formData = new URLSearchParams();
  formData.append("dated", date);
  formData.append("session", session);
  formData.append("submit", "");

  const hasSeatingPath = url.includes("/seating/");
  const refererUrl = `https://examcell.srmist.edu.in/${venue}${
    hasSeatingPath ? "/seating" : ""
  }/bench/get_datewise_report.php`;

  const response = await axios.post(url, formData.toString(), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Origin: "https://examcell.srmist.edu.in",
      Referer: refererUrl,
      "User-Agent": "Mozilla/5.0",
    },
  });

  const $ = cheerio.load(response.data);
  let found = null;

  $(".content-and-table").each((_, section) => {
    const roomInfo = $(section)
      .find("#datessesinfo h4")
      .text()
      .replace(/\s+/g, " ")
      .trim();

    $(section)
      .find("table tr")
      .each((_, row) => {
        const cells = $(row)
          .find("td")
          .map((i, el) => $(el).text().trim())
          .get();

        if (cells.length > 2 && cells[2] === registerNumber) {
          found = {
            venue,
            session,
            roomInfo,
            seatNo: cells[1],
            registerNumber: cells[2],
          };
        } else if (cells.length > 5 && cells[5] === registerNumber) {
          found = {
            venue,
            session,
            roomInfo,
            seatNo: cells[4],
            registerNumber: cells[5],
          };
        }
      });
  });

  return found;
};
