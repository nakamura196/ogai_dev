#! /usr/bin/env node

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
    to: [
        'nakamura.misa@mail.u-tokyo.ac.jp',
        "nakamura@hi.u-tokyo.ac.jp"
    ],
    from: 'na.kamura.1263@gmail.com',
    subject: 'デプロイが完了しました',
    text: 'デプロイが完了しました',
    // html: '<p>Hello HTML world!</p>',
};

sgMail
    .send(msg)
    .then(() => console.log('Mail sent successfully'))
    .catch(error => console.error(error.toString()));