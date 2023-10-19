const express = require("express");
const request = require("request");
const { config } = require("dotenv");
const { sendEmailMailGun } = require("../providers/mailgun");

config();

const domain_mailgun_test = process.env.DOMAIN_MAILGUN;

const router = express.Router();

router.post("/", async (req, res) => {
  const { sender_email, receiver_email, email_subject, email_body } = req.body;

  request(domain_mailgun_test, function (error, response) {
    if (!error && response.statusCode == 200) {
      sendEmailMailGun(sender_email, receiver_email, email_subject, email_body);
    } else {
      // call other provider
    }
  });
});

module.exports = (app) => app.use("/send_email", router);
