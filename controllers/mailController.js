const nodemailer = require("nodemailer");
// mail Config
const transporter = nodemailer.createTransport({
    host: 'holy.herosite.pro',
    port: 465,
  auth: {
    user: "support@istetkmce.in",
    pass: "HGaS9b3RWsPE2am",
  },
});

const sendmail = (req, res) => {
  const mailOptions = {
    from: "support@istetkmce.in",
    to: "aravindkrishnanparayil@gmail.com",
    subject: "Sending Email using Node.js",
    text: "That was easy!",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      res.json({ message: "message send" });
    }
  });
};

module.exports = {
  sendmail,
};
