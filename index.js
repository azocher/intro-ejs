// initial express app setup
const express = require('express')
const ejs = require('ejs')
const ejsLayouts = require('express-ejs-layouts')
const app = express()
const PORT = 3000

// MIDDLEWARE SETUP
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use('/loveit', require('./controllers/loveit'))
app.use('/leaveit', require('./controllers/leaveit'))

// GET route for /
app.get('/', (req, res) => {
    res.render('index', { name: 'Anna Zocher' })
})

// open up port for app to be listening on
app.listen(PORT, (err) => {
    if (err) { console.log(err) }
    console.log(`You are tuned in to the sweet sweet sounds of ${PORT} this morning ☕️`)
})