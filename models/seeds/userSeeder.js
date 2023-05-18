const user = require('../user.js')
const userDemo = require('../../userDemo.json')
const db = require('../../config/mongoose.js')

db.once('open', () => {
  user.create(userDemo)
  console.log('done')
})