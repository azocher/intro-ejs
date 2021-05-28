// initial express app setup
const express = require('express')
const app = express()
const PORT = 3000

// GET route for /
app.get('/', (req, res) => {
    res.sendFile(__dirname+'/views/index.html')
    // res.sendFile to render index.html
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