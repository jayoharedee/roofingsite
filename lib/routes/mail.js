'use strict'

const express = require('express')
const router  = express.Router()
const util    = require('util')

const mail = require('../mail.js')

router.post('/lead', (req, res, next) => {
    let {name, number, email, particulars} = req.body

    req.checkBody('name', 'Please provide us with a name').notEmpty()
    req.checkBody('email', 'Invalid email').notEmpty().isEmail()
    req.sanitizeBody('number')
    req.sanitizeBody('particulars')

    const errors = req.validationErrors()

    if(errors) {
        res.status(500).json(JSON.stringify(errors))
        console.error(error, req.ip)
        return
    }

    const lead = mail.options(req.body)
    mail.send(lead)

    res.status(200).end()
})

module.exports = router
