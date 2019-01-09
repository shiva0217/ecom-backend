const express = require('express');
//middlewares
const authentication = require('./middlewares/authentication');
const login = require('./middlewares/login');
//configuration
const config = require('config');
const morgan = require('morgan');

const app = express();
//routes
const productRouter = require('./routes/products');
const userRouter = require('./routes/users');
const homeRouter = require('./routes/home');

//adding middlewares
app.use(express.json);
app.use(authentication);
app.use(login);

//configurating the routes
app.use("/api",homeRouter);
app.use("/api/products",productRouter);
app.use("/api/users",userRouter);

//views
app.set('view engine','pug');
app.set('views','./views/');

app.get('/home',(req,res)=>{
    res.render('index',{appTitle : "Ecommerce backend project", message : "welcome to the Ecommerce web application"});
})
//to change environment set  NODE_ENV = environment like production,stagging,developement and local
console.log("app name: ",config.get("app.name"));
console.log("mail server host :", config.get("mail.host"));

const port = process.env.ECBPORT || 3000;
app.listen(port, ()=>console.log(`listening on port ${port}`));
