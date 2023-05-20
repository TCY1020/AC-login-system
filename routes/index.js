const router = require('express').Router()


const home = require('./modules/home.js')
const userFeature = require('./modules/userFeature.js')

router.use ('/', home)
router.use('/profile', userFeature)


module.exports = router