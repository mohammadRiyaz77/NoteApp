const express = require("express");
const app = express();
const PORT = 3000;

app.get("/",(req,res)=>{
    res.send("API is running..");
})

app.listen(PORT,()=>{
    console.log("Server is running",PORT);
})