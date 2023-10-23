const express = require("express");
const https = require("https");
const { config } = require("dotenv");
const { sendEmailMailGun } = require("../providers/mailgun");
const { sendEmailNodeMailer } = require("../providers/nodemailer");

config();

const domain_mailgun_test = process.env.DOMAIN_MAILGUN;

const router = express.Router();

router.post("/", async (req, res) => {
  const { sender_email, receiver_email, email_subject, email_body } = req.body;
  const hostname = domain_mailgun_test;
  const response = res;

  try {
    const request = https.request(
      {
        hostname: hostname,
        rejectUnauthorized: false,
      },
      async function (res) {
        if (res.statusCode == 200) {
          await sendEmailMailGun(
            sender_email,
            receiver_email,
            email_subject,
            email_body
          );
          response.status(200).send({
            message: `email sent to ${receiver_email}`,
          });
        } else {
          await sendEmailNodeMailer(
            sender_email,
            receiver_email,
            email_subject,
            email_body
          );
          response.status(200).send({
            message: `email sent to ${receiver_email}`,
          });
        }
      }
    );
    request.on("error", (e) => {
      console.log("Erro: " + e);
    });
    request.end();
  } catch (error) {
    console.log(error);
  }
});

module.exports = (app) => app.use("/send_email", router);
