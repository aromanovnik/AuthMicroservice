import { Injectable } from '@nestjs/common';

import * as nodemailer from 'nodemailer';
import { Transporter } from 'nodemailer';
import { ConfigService } from '@nestjs/config';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

type SendMailData = {
  to: string;
  subject: string;
  text: string;
  html: string;
};

@Injectable({})
export class Mailer {
  transporter: Transporter<SMTPTransport.SentMessageInfo>;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      // host: 'Gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: this.configService.get<string>('email.user'),
        pass: this.configService.get<string>('email.pass'),
      },
    });
  }

  async sendMail({ to, subject, text, html }: SendMailData): Promise<void> {
    if (!this.transporter) {
      return;
    }

    await this.transporter.sendMail({
      from: this.configService.get<string>('email.user'),
      to,
      subject,
      text,
      html,
    });
  }
}
