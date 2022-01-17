const express = require("express")
const router = express.Router()

// All author routes
router.get('/', (req, res)=>{
    res.render('authors/index')
})

// new author route
router.get('/new', (req, res)=>{
    res.render('authors/new')
})

// create author
router.post('/',(req,res) =>{
    res.send('Create')
})

module.exports = router