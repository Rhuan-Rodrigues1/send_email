const { config } = require("dotenv");
config();

const API_KEY = process.env.API_KEY_MAILGUN;
const DOMAIN = process.env.DOMAIN_MAILGUN;

const mailgun = require("mailgun-js")({ apiKey: API_KEY, domain: DOMAIN });

const sendEmailMailGun = async (
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
    await mailgun.messages().send(data, (error, body) => {
      if (error) console.log(error);
      else console.log(body);
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { sendEmailMailGun };
