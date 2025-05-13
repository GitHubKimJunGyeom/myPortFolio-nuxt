import { defineEventHandler, readBody } from 'h3';
import nodemailer from 'nodemailer';

interface MailRequestBody {
  name: string;
  email: string;
  phone: string;
  subject: string;
  content: string;
}

export default defineEventHandler(async (event) => {
  const body = await readBody<MailRequestBody>(event);

  const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
      user: process.env.GOOGLE_MAIL_SENDER,
      pass: process.env.GOOGLE_MAIL_APP_PASSWORD,
    }
  });

  const mailOptions = {
    from: `"ポートフォリオサイト" <${process.env.GOOGLE_MAIL_SENDER}>`,
    to: 'starmax8820@gmail.com',
    subject: `${body.subject}`,
    replyTo: body.email,
    text: `
      【name】 : ${body.name}
      【e-mail】 : ${body.email}
      【phone】 : ${body.phone}
      【subject】 : ${body.subject}
      【message】 : ${body.content}`.trim()
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { 
      success: true, 
      messageId: info.messageId,
    };
  } catch (error: unknown) {
    const err = error as Error;
    console.error('メール送信失敗:', err);
    return { 
      success: false, 
      error: err.message ?? '未知のエラーが発生しました。' 
    };
  }
});