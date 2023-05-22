const router = require('express').Router()
const user = require('../../models/user.js')

let key 

//比對帳密
//正確----->導入頁面
//錯誤----->回主畫面跳通知
router.post('/check', (req, res) => {
  const userInfo = req.body

  user.findOne({
    email: userInfo.email,
    password: userInfo.password
  })
    .lean()
    .then((userCheck) => {
      if (userCheck) {
        //res.render('userPage', { userCheck })
        res.redirect('/profile/login')
        key = userCheck._id
      } else {
        res.render('index', { wrong:'抱歉，找不到與此電子郵件地址相關的帳戶。請再試一次'})
      }
    })
    .catch(error => console.log(error))
    //console.log(key)
    
})

router.get('/login', (req, res) => {
  user.findById(key._id)
  .lean()
    .then(userData => res.render('userPage', { userData }))
  
})


module.exports = router