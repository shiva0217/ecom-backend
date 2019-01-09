const express = require('express');
const router = express.Router();
const joi = require('joi');
//getting users from database
const products = require('../database/users');

//get all the users
const usersList = products.userinfo;
router.get('/users', (req,res) => {
    res.send(usersList);
})
//get users by using id
router.get('/users/:id',(req,res)=>{
    const user = userinfo.find(p => p.id === parseInt(req.params.id));
    if(!user) return res.status(404).send(`products with id ${req.params.id} is not found`);
    res.send(user);
})

//creating user by max id
router.post('/users',(req,res)=>{
    if(!req.body.name || req.body.name.length <4){
        res.status(400).send("name must be required & it should contains 5 characters minimum")
    }
    const schema = {
        name : joi.string().min(4).max(50).required()
    };
    const result= Joi.validate(req.body.schema);
    if(result.error) return res.status(400).send(result.error.details[0].message);
    const user = userinfo.reduce((acc,cur)=>({id: cur.id}))
    const maxId = user.id + 1;
    const newUser = {
        id: maxId,
        name : req.body.name
    }
    userinfo.push(newUser);
    res.send(newUser);
})
//updating users
router.put('/users/:id',(req,res)=>{
const user = userinfo.find(p => p.id === parseInt(req.params.id));
if(!user) return res.status(404).send(`products with id ${req.params.id} is not found`);

const schema = {
    name : joi.string().min(4).max(50).required()
};
const result= Joi.validate(req.body.schema);
if(result.error) return res.status(400).send(result.error.details[0].message);
product.name = req.body.name;
res.send(product);
})
//deleting user
router.delete('/users/:id',(req,res)=>{
const user = userinfo.find(p => p.id === parseInt(req.params.id));
if(!user) return res.status(404).send(`products with id ${req.params.id} is not found`);

const indexOfusers = userinfo.indexOf(user);
userinfo.splice(indexOfusers,1);
res.status(200),send(`deleted the product`);
res.send();
})
module.exports = router;