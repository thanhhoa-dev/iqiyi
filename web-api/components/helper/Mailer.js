const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    pool : true,
    host : 'smtp.gmail.com',
    port : 465,
    secure : true, // use TLS
    auth : {
        user : 'pr0h0afccf@gmail.com',
        pass : 'ouhskwzceubqsdyf'
    }
});

const sendMail = async (data) => {
    try {
        const { email, subject, content } = data;
        const mailOptions = {
            from : 'pr0h0afccf@gmail.com',
            to : email,
            subject,
            html : content,
        };
        await transporter.sendMail(mailOptions);
        return true;
    } catch (error) {
        console.log(error);
        throw new Error('có lỗi xảy ra khi gửi mail');
    }
}

module.exports = { sendMail };