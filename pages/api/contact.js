const nodemailer = require('nodemailer');
const { google } = require('googleapis');
// const OAuth2 = google.auth.OAuth2;

const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL
);

oAuth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
});

export default (req, res) => {
  const { name, email, text } = req.body;

  const sendMail = async () => {
    try {
      const accessToken = await oAuth2Client.getAccessToken();

      const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: 'keithmaniacop@gmail.com',
          clientId: process.env.CLIENT_ID,
          clientSecret: process.env.CLIENT_SECRET,
          refreshToken: process.env.REFRESH_TOKEN,
          accessToken: accessToken,
        },
      });

      const mailOptions = {
        from: `KEITHIPHONE5S <keithiphone5s@gmail.com>`,
        to: `${process.env.EMAIL}`,
        subject: `New mail from ${email}`,
        text: `
      ${name} wrote:
      ${text}
      `,
        html: '<h1>Hello from gmail email using API</h1>',
      };

      const result = await transport.sendMail(mailOptions);
      return result;
    } catch (error) {
      return error;
    }
  };

  sendMail()
    .then((result) => console.log('Email sent...', result))
    .catch((error) => console.log(error.message));
};
