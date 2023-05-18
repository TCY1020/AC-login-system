const router = require('express').Router()

const home = require('./modules/home.js')

router.use ('/', home)


module.exports = router