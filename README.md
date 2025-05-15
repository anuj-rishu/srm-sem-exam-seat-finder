# 🎓 SRMIST Exam Seat Finder API

A Node.js Express server that allows students to find their **exam seating arrangement** by simply entering their **exam date** and **register number**. The server checks across all SRMIST venues and sessions (FN/AN) to return the student's seat number, room info, venue, and session.

---

## 🚀 Features

- 🔍 Search across **Tech Park, Main, Bio, and UB** venues
- 🕒 Supports both **FN (Forenoon)** and **AN (Afternoon)** sessions
- 📅 Input required: only **exam date** and **register number**
- ✅ Returns exact **seat number**, **room**, **venue**, and **session**
- 🌐 Easy-to-integrate RESTful API

---

## 📦 Tech Stack

- Node.js
- Express.js
- Axios (for HTTP requests)
- Cheerio (for HTML parsing)


---

## 🛠️ Installation

1. **Clone the repo:**
```bash
git clone https://github.com/yourusername/srm-seat-finder.git
cd srm-seat-finder
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the server:**
```bash
node server.js
```

Server will run at: `http://localhost:9000`

## 📡 API Usage

POST `/get-seat`

**Request Body:**
```json
{
  "date": "17/05/2025",
  "registerNumber": "RA2211003010025"
}
```

**Response (success):**
```json
{
  "success": true,
  "seatDetails": {
    "venue": "tp",
    "session": "AN",
    "roomInfo": "ROOM NO:TP202 DATE : 17/MAY/2025 SESSION : AN",
    "seatNo": "2",
    "registerNumber": "RA2211003010025"
  }
}
```

**Response (not found):**
```json
{
  "success": false,
  "message": "Register number not found in any venue/session for this date"
}
```

## 📄 Example cURL Request

```bash
curl -X POST http://localhost:9000/get-seat \
  -H "Content-Type: application/json" \
  -d '{"date":"17/05/2025", "registerNumber":"RA2211003010025"}'
```

## 🤝 Contributing

Feel free to submit issues, pull requests, or suggestions. Contributions are welcome!

## 📜 License

This project is open-source and available under the MIT License.

## 👨‍💻 Author

**Anuj Tiwari**
