const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    var html = fs.readFileSync('index.html',{encoding:'utf-8'});
    res.send(html);
})

app.listen(port, ()=>{
    console.log(`Example app listeening at http://localhost:${port}`);
})