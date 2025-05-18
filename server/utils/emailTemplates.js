const generateThankYouEmail = (studentData) => {
  const { name, registerNumber, email, phone, yearOfStudy, domain, projects } =
    studentData;

  let projectsList = "";
  if (projects && projects.length > 0) {
    projectsList = "<h3>Your Projects:</h3><ul>";
    projects.forEach((project) => {
      projectsList += `<li>${project.title}${
        project.link ? ` - <a href="${project.link}">${project.link}</a>` : ""
      }</li>`;
    });
    projectsList += "</ul>";
  }

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
      <h2 style="color: #333;">Thank You for Your Interest in SRM Insider Community!</h2>
      
      <p>Dear ${name},</p>
      
      <p>Thank you for submitting your details to the SRM Insider Community. We have added you to our waiting list and will contact you when recruitment starts.</p>
      
      <h3>Your Details:</h3>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Register Number:</strong> ${registerNumber}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Year of Study:</strong> ${yearOfStudy}</li>
        <li><strong>Domain of Expertise:</strong> ${domain}</li>
      </ul>
      
      ${projectsList}
      
      <p>We're excited about your interest in our community! <strong>Recruitment will start soon</strong>, and we'll reach out to you with more information.</p>
      
      <div style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 15px;">
        <p>Best regards,<br>
        <b>Anuj Rishu Tiwari</b><br>
        SRM Insider Community Team<br>
        <a href="https://github.com/anuj-rishu" style="color: #0366d6; text-decoration: none;">GitHub</a> | 
        <a href="https://linkedin.com/in/anuj-rishu" style="color: #0077b5; text-decoration: none;">LinkedIn</a>
        </p>
      </div>
    </div>
  `;
};

module.exports = {
  generateThankYouEmail,
};