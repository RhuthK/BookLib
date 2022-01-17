if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
import express, { static } from 'express'
const app = express()
import expressLayouts from 'express-ejs-layouts'

app.set('view engine' , 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(static('public'))

import { connect, connection } from 'mongoose'
connect(process.env.DATABASE_URL, {useNewUrlParser:true})
const db = connection 
db.on('error', error => console.error(error))
db.once('open', () => console.log('connected to mongoose'))

import indexRouter from './routes/index'
app.use('/', indexRouter)

const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log('Running on port ', port)
})
