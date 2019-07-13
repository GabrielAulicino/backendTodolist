const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const mongodb= require("./database/index")
const routerUser= require("./app/routes/usuarios.routes")
const cors= require("cors");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8000;

// router.use(function(req, res, next){
//     console.log("Algo esta acontecendo aqui...");
//     next();
// })

// router.get('/', function(req,res){
//     res.json({ message: 'API Funcionando.'});
// });
app.use(cors())
app.use('/api',routerUser );

app.get('/', (req, res)=>{
    return res.send("Hello")
})

app.listen(port,()=>{
    console.log(`linsten port ${port} `)
    mongodb()
});

