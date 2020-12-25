import express from 'express'
import path from 'path'
import bodyparser from 'body-parser'
const app:express.Application =express()
app.set('views', path.join(__dirname, './views'))
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(bodyparser.urlencoded({extended: true}));
app.get('/',(req,res)=>{
    res.render('first')
})
app.post('/landing',(req,res)=>{
    res.render('landing',{name1:req.body.fname,name2:req.body.lname})
})
app.listen(3000,()=>{console.log("started at")})