import express from 'express';
import { userRouter } from './module/user/user.controller.js';
import { productRouter } from './module/product/product.controller.js';

const app = express();

app.use(express.json());


//ROTAS USADAS
app.use(userRouter);
app.use(productRouter);


 


app.get('/',(res,req) =>{
    req.send(`Olá teste`)
});



app.listen(8080, ()=>{
    console.log("Servidor rodando")
});

