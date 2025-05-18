require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const seatRoutes = require("./routes/seatRoutes");
const studentProfileRoutes = require("./routes/studentProfileRoutes");

const connectDB = require("./config/db");
connectDB();
const app = express();
const PORT = process.env.PORT || 9000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", seatRoutes);
app.use("/api/student-profiles", studentProfileRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
