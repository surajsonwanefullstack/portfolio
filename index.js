const express = require("express")
const path = require("path")
const {configDotenv} = require('dotenv')
const app =express()
app.use(express.static(path.join(__dirname,"public")))
app.use(express.static("/pages"))
configDotenv({
    path:"./env"
})
const PORT = process.env.PORT || 8001
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, './pages/portfolio/portfolio.html'))
})

app.get("/linkedin",(req,res)=>{
    res.sendFile(path.join(__dirname,'/pages/linkedin/linkedin.html'))
})

app.listen(PORT,()=>{
    console.log("server is up and running at port "+PORT)
})