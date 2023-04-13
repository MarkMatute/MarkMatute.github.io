// pages/api/send-email.js
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SEND_GRIND_API_KEY || '');

export default async function handler(req: any, res: any) {
  const { name, email, message } = req.body;

  const msg = {
    to: 'markernest.matute@gmail.com',
    from: 'markernest.matute@gmail.com',
    subject: `New message from ${name}, ${email}`,
    text: message,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ status: true, message: 'Email sent' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: 'Email failed to send' });
  }
}
