const express=require('express')
const app=express();



app.post('/login',(req,res)=>{
    res.send('is OK')
})

app.listen(3000);