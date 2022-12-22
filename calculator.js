const express = require("express")
const bodyparser = require("body-parser")
const app = express()

app.use(bodyparser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})
app.post("/",function(req,res){
    var num1 = req.body.num1
    var num2 = req.body.num2
    var result = Number(num1) + Number(num2)
    res.send("Your ans is " + result)
})
app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/bmi.html")
})
app.post("/bmicalculator",function(req,res){
    var num1 = req.body.weight
    var num2 = req.body.height

    var result = Number(num1)/Number(num2*num2)
    res.send("Your ans is" + result)
})
app.listen("3000",function(){
    console.log("start server")
})