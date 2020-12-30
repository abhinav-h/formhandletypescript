import nodemailer from 'nodemailer'
export let transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
       user: 'd1b1fc469e93bd',
       pass: '28e08b4714a7b9'
    }
});

export var message = {
    from: 'elonmusk@tesla.com', // Sender address
    to: 'sawk3344@gmail.com',         // List of recipients
    subject: 'Design Your Model S | Tesla', // Subject line
    text: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
};
