import express from 'express'
import path from 'path'
import bodyparser from 'body-parser'
import nodemailer from 'nodemailer'
const val= require('./mail')

const app:express.Application =express()
app.set('views', path.join(__dirname, './views'))
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(bodyparser.urlencoded({extended: true}))
app.get('/',(req,res)=>{
    res.render('first')
})
app.post('/landing',(req,res)=>{
    res.render('landing',{name1:req.body.fname,name2:req.body.lname})
    val.message.to=req.body.ename;
    val.transport.sendMail(val.message, function(err:any, info:any) {
        if (err) {
          console.log(err)
        } else {
          console.log(info);
        }
    });
})
const port:number=3000;
app.listen(port,()=>{console.log("started at"+port)})