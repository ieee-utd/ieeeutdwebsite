export default function handler(req, res) {
  if (req.method == "POST") {
    const nodemailer = require("nodemailer");
    const { google } = require("googleapis");

    // Create a new nodemailer transporter with OAuth2 authentication

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        type: "OAuth2",
        user: "ieeeutd@gmail.com",
        serviceClient: process.env.GOOGLE_MAIL_CLIENT_ID,
        privateKey: process.env.GOOGLE_MAIL_PRIVATE_KEY,
        accessToken: "ya29.Xx_XX0xxxxx-xX0X0XxXXxXxXXXxX0x",
        expires: 1484314697598,
      },
    });

    // Send the email with the transporter
    const email = req.body.email;

    const sendEmail = async (email) => {
      if (email == null) {
        res.status(500).json({ message: "Email is null" });
      }

      const message = {
        from: "ieeeutd@gmail.com",
        to: email,
        subject: "Test Message",
        text: "Hello this is a test",
      };

      try {
        await transporter.sendMail(message);
        console.log("Email sent successfully!");
      } catch (error) {
        console.o;
      }
    };

    console.log(req.body);
  }
}
