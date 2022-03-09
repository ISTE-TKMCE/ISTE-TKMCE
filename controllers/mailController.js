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

  console.log(req);
  console.log(req.body);  
 
    const mailOptions = {
      from: "support@istetkmce.in",
      to: "aravindkrishnanparayil@gmail.com",
      subject: "ISTE : Contact Form response",
      text: `name : ${req.body.name} <br><br> email: ${req.body.email} <br><br> message:  ${req.body.message} <br><br>`,
    };
  
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

  console.log('sending response')
  res.json({ message: "message send" });


};

module.exports = {
  sendmail,
};
