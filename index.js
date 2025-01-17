const express = require("express")
const {configDotenv} = require('dotenv')
const app =express()
configDotenv({
    path:"./.env"
})
const PORT = process.env.PORT || 8001
app.get("/",(req,res)=>{
    res.send("welcome")
})

app.listen(PORT,()=>{
    console.log("server is up and running at port "+PORT)
})