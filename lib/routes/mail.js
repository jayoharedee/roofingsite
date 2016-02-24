'use strict'

const express = require('express')
const router  = express.Router()

const mail = require('../mail.js')

router.post('/lead', (req, res, next) => {
    // pass req.body to mail method and then send backa a 200
    res.end()
})

module.exports = router
