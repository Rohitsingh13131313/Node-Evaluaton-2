let express = require("express");


let app = express();
app.use(express.json())

app.post("/title",(req,res)=>{
    res.send("This is routs of title")

})
app.post("/title",(req,res)=>{
    res.send("This is routs of title")

})
app.post("/title",(req,res)=>{
    res.send("This is routs of title")

})

app.listen(3000,()=>{
    console.log("server is start at http://localhost:3000")
})