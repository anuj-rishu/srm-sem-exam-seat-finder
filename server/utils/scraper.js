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

  try {
    const response = await axios.post(url, formData.toString(), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Origin: "https://examcell.srmist.edu.in",
        Referer: refererUrl,
        "User-Agent": "Mozilla/5.0",
      },
      timeout: 5000,
    });

    const $ = cheerio.load(response.data);

    const tables = $("table#maintable").toArray();

    for (const table of tables) {
      const roomInfo = $(table)
        .prevAll("div#datessesinfo")
        .first()
        .find("h4")
        .text()
        .replace(/\s+/g, " ")
        .trim();

      const rows = $(table).find("tr").toArray();

      for (const row of rows) {
        const cells = $(row)
          .find("td")
          .map((i, el) => $(el).text().trim())
          .get();

        if (cells.length > 2 && cells[2] === registerNumber) {
          return {
            venue,
            session,
            roomInfo,
            seatNo: cells[1],
            registerNumber: cells[2],
          };
        }

        if (cells.length > 5 && cells[5] === registerNumber) {
          return {
            venue,
            session,
            roomInfo,
            seatNo: cells[4],
            registerNumber: cells[5],
          };
        }
      }
    }

    return null;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
}
