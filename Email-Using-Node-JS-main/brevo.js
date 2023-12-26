//1. install nodemailer libararay

//2. import nodemailer
const nodemailer = require('nodemailer');

//3. cofigure mail and send it
async function sendMail(){
    //1. create an email transporter.
    //SMTP (Simple Mail Transfer Protocol)
   const transporter =  nodemailer.createTransport({
        host: "smtp-relay.brevo.com",
        port: 587,
        auth:{
            user: 'iamkkashyap@gmail.com',
            pass: 'xsmtpsib-40fea8a82e56720fbaa75aa9acf63947d0d0fd6159ea57715af867648d20f605-hTFbIKd9XW2ZfqP0'
        }
    })

    //smtp key -- xsmtpsib-40fea8a82e56720fbaa75aa9acf63947d0d0fd6159ea57715af867648d20f605-hTFbIKd9XW2ZfqP0


    //2.configure email content.
    const mailOptions = {
        from:'iamkkashyap@gmail.com',
        to: 'iamkuljeetkashyap@gmail.com',
        subject: 'Welcome to NodeJS Brevo Combo',
        text: 'This is an email using Brevo so that we can send mail easily',
    }

    //3. send email
    try {
       const result = await transporter.sendMail(mailOptions);
       console.log('Email sent successfully')
    } catch (error) {
        console.log('Email send failed with error:', error)
    }
}

sendMail()