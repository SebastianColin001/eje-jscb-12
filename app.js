const express = require ('express');
const hbs= require('hbs'); 
const bodyParser = require ('body-parser'); 
const cors= require('cors'); 
const port =process.env.PORT || 3000; 

const app= express(); 

app.set('view engine','hbs'); 
hbs.registerPartials(__dirname+'/views/partials',()=>{});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true})); 
app.use(bodyParser.json()); 
app.use(cors()); 


//definir rutas: login, categorias, index, not foud 
app.get('/',(req,res)=>{
    res.render('index')
});

app.get('/login',(req,res)=>{
    res.render('signup-one')
});

app.get('/categorias',(req,res)=>{
    res.render('advance-table')
});

app.get('*',(req,res)=>{
    res.render('404');
});

//definir puerto que escucha solicitudes 
app.listen(port,()=>{
    console.log('el servidor está corriendo en el puerto: '+port); 
})