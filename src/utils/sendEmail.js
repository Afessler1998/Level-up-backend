const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const { OAuth2 } = google.auth;

async function sendEmail(clientEmail, subject, text) {
  try {
    const {
      GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET,
      GOOGLE_OAUTH2_REFRESH_TOKEN,
      APP_EMAIL
    } = process.env;

    const oauth2Client = new OAuth2(
      GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
    );
    oauth2Client.setCredentials({ refresh_token: GOOGLE_OAUTH2_REFRESH_TOKEN });

    const accessToken = await oauth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: APP_EMAIL,
        clientId: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        refreshToken: GOOGLE_OAUTH2_REFRESH_TOKEN,
        accessToken
      }
    });

    const mailOptions = {
      from: APP_EMAIL,
      to: clientEmail,
      subject,
      text
    };

    const emailResponse = await transporter.sendMail(mailOptions);

    return emailResponse;
  } catch (error) {
    console.log(error);
  }
}

module.exports = sendEmail;
