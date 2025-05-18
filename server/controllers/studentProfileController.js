const StudentProfile = require("../models/studentProfile");
const { sendEmail } = require("../config/email");
const { generateThankYouEmail } = require("../utils/emailTemplates");

exports.createStudentProfile = async (req, res) => {
  const { name, registerNumber, email, phone, yearOfStudy, domain, projects } =
    req.body;

  if (!name || !registerNumber || !email || !phone || !yearOfStudy || !domain) {
    const missingFields = [];
    if (!name) missingFields.push("name");
    if (!registerNumber) missingFields.push("register number");
    if (!email) missingFields.push("email");
    if (!phone) missingFields.push("phone");
    if (!yearOfStudy) missingFields.push("year of study");
    if (!domain) missingFields.push("domain");
    
    return res
      .status(400)
      .json({ 
        success: false, 
        message: `Missing required fields: ${missingFields.join(", ")}` 
      });
  }

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      message: "Invalid email address format. Please provide a valid email address (e.g., example@domain.com)"
    });
  }

  try {
    const existingStudent = await StudentProfile.findOne({ registerNumber });
    if (existingStudent) {
      return res.status(400).json({
        success: false,
        message: "Student with this register number already exists",
      });
    }

    const studentProfile = new StudentProfile({
      name,
      registerNumber,
      email,
      phone,
      yearOfStudy,
      domain,
      projects: projects || [],
    });

    await studentProfile.save();
    
    try {
      const emailHtml = generateThankYouEmail(studentProfile);
      await sendEmail(
        email,
        "Thank You for Joining SRM Insider Community Waiting List",
        emailHtml
      );
    } catch (emailError) {
      console.error(`Failed to send email to ${email}:`, emailError);
    }

    return res.status(201).json({
      success: true,
      message: "Student profile created successfully",
      data: studentProfile,
    });
  } catch (error) {
    console.error("Error creating student profile:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.getStudentProfile = async (req, res) => {
  const { registerNumber } = req.params;

  try {
    const studentProfile = await StudentProfile.findOne({ registerNumber });

    if (!studentProfile) {
      return res
        .status(404)
        .json({ success: false, message: "Student profile not found" });
    }

    return res.json({ success: true, data: studentProfile });
  } catch (error) {
    console.error("Error fetching student profile:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.getAllStudentProfiles = async (req, res) => {
  try {
    const studentProfiles = await StudentProfile.find();
    return res.json({ success: true, data: studentProfiles });
  } catch (error) {
    console.error("Error fetching all student profiles:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};