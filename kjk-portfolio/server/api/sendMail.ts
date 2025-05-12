import { defineEventHandler, readBody } from 'h3';
import nodemailer from 'nodemailer';

interface MailRequestBody {
  name: string;
  email: string;
  content: string;
}

export default defineEventHandler(async (event) => {
  const body = await readBody<MailRequestBody>(event);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.GOOGLE_MAIL_SENDER!,
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      refreshToken: process.env.GOOGLE_REFRESH_TOKEN!,
    },
  });

  const mailOptions = {
    from: `"ポートフォリオサイト" <${process.env.GOOGLE_MAIL_SENDER}>`,
    to: '받는사람@example.com',
    subject: 'お問い合わせフォームからのメッセージ',
    text: `
      【名前】 ${body.name}
      【メールアドレス】 ${body.email}
      【メッセージ】
      ${body.content}
    `.trim(),
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { success: true, messageId: info.messageId };
  } catch (error: unknown) {
    const err = error as Error;
    console.error('メール送信失敗:', err);
    return { success: false, error: err.message ?? '未知のエラーが発生しました。' };
  }
});