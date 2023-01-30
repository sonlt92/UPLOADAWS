// server.js
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 4000
// const PORT = 27017;
const cors = require('cors')
const mongoose = require('mongoose')

const personsRoute = require('./persons.route')

mongoose.Promise = global.Promise
// mongoose.connect('mongodb://admin:admin123@35.77.138.242:27017/')
mongoose.connect('mongodb://35.73.207.4:27017/thong?authSource=admin')

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function callback() {
  console.log('h')
})

exports.test = function (req, res) {
  console.log(res)
}

// mongoose.connect(config.DB, { useNewUrlParser: true }).then(
//     () => {console.log('Database is connected') },
//     err => { console.log('Can not connect to the database'+ err)}
// );

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/persons', personsRoute)

app.listen(PORT, function () {
  console.log('Server is running on Port:', PORT)
})
