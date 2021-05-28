const express = require('express')
const router = express.Router()

router.get('/foods', (req, res) => {
    let faveFoods = ['Boba', 'Fried Chicken Sandwhich', 'Pizza']
    res.render('loveit/foods.ejs', { foods: faveFoods })
})

module.exports = router