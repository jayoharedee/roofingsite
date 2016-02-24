'use strict'
const nodemailer = require('nodemailer')
const sesTransport = require('nodemailer-ses-transport')

function Mail() {
    const options = ({name, email, number, particulars}) => {
        const subject = `New Lead via Homesteadroofs.ca from ${name}`
        const body = `
            <p> New Lead from: ${name}  </p>
            <p> Phone number: ${number} </p>
            <p> Email: ${email} </p>
            <p> Particulars: ${particulars}</p>
        `
        return {
            from: 'Homestead Mailer <no-reply@homesteadroofs.ca>',
            to: 'jmorenstein@live.com, homestead95@gmail.com',
            subject: subject,
            html: body
        }
    }

    const transport = nodemailer.createTransport(sesTransport({
        accessKeyId: process.env.SES_KEY,
        secretAccessKey: process.env.SES_SECRET,
        rateLimit: 1
    }))

    const send = (options) => {
        transport.sendMail(options, (err, info) => {
            if(err) return console.error(err)

            console.log('Message sent: ' + info)
        })
    }

    return Object.freeze({
        send,
        options
    })
}

module.exports = new Mail()
