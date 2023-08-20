import express from 'express';

const app = express();

app.get('/',(res,req) =>{
    req.send(`Olá teste`)
});

app.listen(8080, ()=>{
    console.log("Servidor rodando")
});