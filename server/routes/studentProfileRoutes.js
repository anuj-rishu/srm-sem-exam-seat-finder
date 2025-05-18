const express = require("express");
const studentProfileController = require("../controllers/studentProfileController");

const router = express.Router();

router.post("/create", studentProfileController.createStudentProfile);

router.get("/:registerNumber", studentProfileController.getStudentProfile);

router.get("/", studentProfileController.getAllStudentProfiles);

module.exports = router;
