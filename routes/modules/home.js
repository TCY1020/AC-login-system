const router = require('express').Router()
const user = require('../../models/user.js')

router.get('/', (req, res) =>{
  res.render('index')  
})


module.exports = router