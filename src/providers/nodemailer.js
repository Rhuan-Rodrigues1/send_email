const nodemailer = require("nodemailer");
const { config } = require("dotenv");

config();

const transport = nodemailer.createTransport({
  host: process.env.HOST_NODEMAILER,
  port: process.env.PORT_NODEMAILER,
  auth: {
    user: process.env.USERNAME_NODEMAILER,
    pass: process.env.PASSWORD_NODEMAILER,
  },
});

const sendEmailNodeMailer = async (
  sender_email,
  receiver_email,
  email_subject,
  email_body
) => {
  const data = {
    from: sender_email,
    to: receiver_email,
    subject: email_subject,
    text: email_body,
  };

  try {
    await transport.sendMail(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { sendEmailNodeMailer };
