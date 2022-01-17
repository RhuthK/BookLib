if(process.env.NODE_ENV !== 'production'){
    require('dotenv').load()
}
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

app.set('view engine' , 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true})
const db = mongoose.connection 
db.on('error', error => console.error(error))
db.once('open', () => console.log('connected to mongoose'))

const indexRouter = require('./routes/index')
app.use('/', indexRouter)

const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log('Running on port ', port)
})
