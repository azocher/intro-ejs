// initial express app setup
const express = require('express')
const ejs = require('ejs')
const app = express()
const PORT = 3000

// MIDDLEWARE SETUP
app.set('view engine', 'ejs')

// GET route for /
app.get('/', (req, res) => {
    res.render('index', { name: 'Anna Zocher' })
})

// GET route for /about
app.get('/about', (req, res) => {
    res.send("👾")
})

// GET route for /blog for blog posts
app.get('/blog', (req, res) => {
    res.send("🐳")
})

// open up port for app to be listening on
app.listen(PORT, (err) => {
    if (err) { console.log(err) }
    console.log(`You are tuned in to the sweet sweet sounds of ${PORT} this morning ☕️`)
})