// Import nodemailer
const nodemailer = require ('nodemailer');
// Configure mail and send it

async function sendMail(){
    //1.Create an mail Transporter
    //SMTP (Simple Mail Transfer Protocol)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rahul2sender@gmail.com',
            pass: 'bynz zgdp qkdt hzwb'
        }
    });

    //2.Configure mail content
    const mailOptions = {
        from: 'rahul2sender@gmail.com',
        to: 'amitverma.bncet@gmail.com',
        subject: 'Welcome to the NodeJs',
        text: 'This is an email using nodemailer in nodeJS'
    };

    //Send the mail
    try{
        const result = await transporter.sendMail(mailOptions);
        console.log('Email sent Successfully');
    } catch(err){
        console.log('Email send failed with error: '+ err);
    }
}
sendMail();