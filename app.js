const express = require('express')
const bodyParser = require('body-parser') 
const exphbs = require('express-handlebars')

const router = require('./routes')
const app = express()
const port = 3000

require('./config/mongoose.js')

app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(router)

app.listen(port, () => {
  console.log(`Account Login is running on http://localhost:${port}`)
})