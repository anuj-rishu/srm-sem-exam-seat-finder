require("dotenv").config();
const express = require("express");
const cors = require("cors");
const seatRoutes = require("./routes/seatRoutes");

const app = express();
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (req, res) => {
  res.json({ success: true, message: "Server is running" });
});

app.use("/api", seatRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Internal server error" });
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
