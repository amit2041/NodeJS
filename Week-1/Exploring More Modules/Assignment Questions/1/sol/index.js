// Please don't change the pre-written code
// Import the necessary modules here
import { sync } from 'glob';
import nodemailer from 'nodemailer';
import readline from 'readline';

const Solution = () => {
  // Write your code here
  // Configure mail and send it
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Please enter your email: ', async(userMail) => {
    // Create a mail transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'codingninjas2k16@gmail.com',
        pass: 'slwvvlczduktvhdj'
      }
    });

  //2. configure mail content
  const mailOptions = {
    from: 'codingninjas2k16@gmail.com',
    to: userMail,
    subject: 'Coding Ninjas',
    text: 'The world has enough coders; be a coding ninja!'
  }

  //3.send the mail
  try {
    const result = await transporter.sendMail(mailOptions);
    console.log('Success! Email sent to ' + userMail);
  } catch (error) {
    console.log('Error:', error);
  } finally {
    rl.close();
  }
});
};

export default Solution;
