const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
app.set('view engine' , 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayout)
app.use(express.static('public'))


app.get('/', (req,res)=>{
    res.send('You are on the homepage')
})

