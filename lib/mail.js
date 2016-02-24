const nodemailer = require('nodemailer')
const sesTransport = require('nodemailer-ses-transport')

const mailOptions = {
    from: 'Homestead Mailer <no-reply@homesteadroofs.ca>',
    to: 'jmorenstein@live.com',
    subject: 'New Lead via Homesteadroofs.ca',
    html: '<b>Test mailer</b>'
}

const transport = nodemailer.createTransport(sesTransport({
    accessKeyId: process.env.SES_KEY,
    secretAccessKey: process.env.SES_SECRET,
    rateLimit: 1
}))

function Mailer() {

}

module.exports = {
    lead() {
        transport.sendMail(mailOptions, (err, info) => {
            if(err) return console.error(err)

            console.log('Message sent: ' + info.response)
        })
    }
}
