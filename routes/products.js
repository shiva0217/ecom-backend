const express = require('express');
const router = express.Router();
const joi = require('joi');
//getting products from database
const products = require('../database/productsinfo');

//get all the products
const productsList = products.productsinfo;
router.get('/products', (req,res) => {
    res.send(productsList);
})
//get men products
router.get('/products/men', (req,res) => {
    res.send(productsinfo.men);
})
//get men products by using id
router.get('/products/men/:id',(req,res)=>{
    const product = productsinfo.men.find(p => p.id === parseInt(req.params.id));
    if(!product) return res.status(404).send(`products with id ${req.params.id} is not found`);
    res.send(product);
})

//creating men product by max id
router.post('/products/men',(req,res)=>{
    if(!req.body.name || req.body.name.length <4){
        res.status(400).send("name must be required & it should contains 5 characters minimum")
    }
    const schema = {
        name : joi.string().min(4).max(50).required()
    };
    const result= Joi.validate(req.body.schema);
    if(result.error) return res.status(400).send(result.error.details[0].message);
    const product = productsinfo.men.reduce((acc,cur)=>({id: cur.id}))
    const maxId = product.id + 1;
    const newProduct = {
        id: maxId,
        name : req.body.name
    }
    productsinfo.men.push(newProduct);
    res.send(newProduct);
})
//updating men products
router.put('/products/men/:id',(req,res)=>{
const product = productsinfo.men.find(p => p.id === parseInt(req.params.id));
if(!product) return res.status(404).send(`products with id ${req.params.id} is not found`);

const schema = {
    name : joi.string().min(4).max(50).required()
};
const result= Joi.validate(req.body.schema);
if(result.error) return res.status(400).send(result.error.details[0].message);
product.name = req.body.name;
res.send(product);
})
//deleting men product
router.delete('/products/men/:id',(req,res)=>{
const product = productsinfo.men.find(p => p.id === parseInt(req.params.id));
if(!product) return res.status(404).send(`products with id ${req.params.id} is not found`);

const indexOfProducts = productsinfo.men.indexOf(product);
product.men.splice(indexOfProducts,1);
res.status(200),send(`deleted the product`);
res.send();
})
//get women products
router.get('/products/women', (req,res) => {
    res.send(productsinfo.women);
})
//get women products by using id
router.get('/products/women/:id',(req,res)=>{
    const product = productsinfo.women.find(p => p.id === parseInt(req.params.id));
    if(!product) return res.status(404).send(`products with id ${req.params.id} is not found`);
    res.send(product);
})

//creating women product by max id
router.post('/products/women',(req,res)=>{
    if(!req.body.name || req.body.name.length <4){
        res.status(400).send("name must be required & it should contains 5 characters minimum")
    }
    const schema = {
        name : joi.string().min(4).max(50).required()
    };
    const result= Joi.validate(req.body.schema);
    if(result.error) return res.status(400).send(result.error.details[0].message);
    const product = productsinfo.women.reduce((acc,cur)=>({id: cur.id}))
    const maxId = product.id + 1;
    const newProduct = {
        id: maxId,
        name : req.body.name
    }
    productsinfo.women.push(newProduct);
    res.send(newProduct);
})
//updating women products
router.put('/products/women/:id',(req,res)=>{
const product = productsinfo.women.find(p => p.id === parseInt(req.params.id));
if(!product) return res.status(404).send(`products with id ${req.params.id} is not found`);

const schema = {
    name : joi.string().min(4).max(50).required()
};
const result= Joi.validate(req.body.schema);
if(result.error) return res.status(400).send(result.error.details[0].message);
product.name = req.body.name;
res.send(product);
})
//deleting women product
router.delete('/products/women/:id',(req,res)=>{
const product = productsinfo.women.find(p => p.id === parseInt(req.params.id));
if(!product) return res.status(404).send(`products with id ${req.params.id} is not found`);

const indexOfProducts = productsinfo.women.indexOf(product);
product.women.splice(indexOfProducts,1);
res.status(200),send(`deleted the product`);
res.send();
})
//get kids products
router.get('/products/kids', (req,res) => {
    res.send(productsinfo.kids);
})
//get kids products by using id
router.get('/products/kids/:id',(req,res)=>{
    const product = productsinfo.kids.find(p => p.id === parseInt(req.params.id));
    if(!product) return res.status(404).send(`products with id ${req.params.id} is not found`);
    res.send(product);
})

//creating kids product by max id
router.post('/products/kids',(req,res)=>{
    if(!req.body.name || req.body.name.length <4){
        res.status(400).send("name must be required & it should contains 5 characters minimum")
    }
    const schema = {
        name : joi.string().min(4).max(50).required()
    };
    const result= Joi.validate(req.body.schema);
    if(result.error) return res.status(400).send(result.error.details[0].message);
    const product = productsinfo.kids.reduce((acc,cur)=>({id: cur.id}))
    const maxId = product.id + 1;
    const newProduct = {
        id: maxId,
        name : req.body.name
    }
    productsinfo.kids.push(newProduct);
    res.send(newProduct);
})
//updating kids products
router.put('/products/kids/:id',(req,res)=>{
const product = productsinfo.kids.find(p => p.id === parseInt(req.params.id));
if(!product) return res.status(404).send(`products with id ${req.params.id} is not found`);

const schema = {
    name : joi.string().min(4).max(50).required()
};
const result= Joi.validate(req.body.schema);
if(result.error) return res.status(400).send(result.error.details[0].message);
product.name = req.body.name;
res.send(product);
})
//deleting kids product
router.delete('/products/kids/:id',(req,res)=>{
const product = productsinfo.kids.find(p => p.id === parseInt(req.params.id));
if(!product) return res.status(404).send(`products with id ${req.params.id} is not found`);

const indexOfProducts = productsinfo.kids.indexOf(product);
product.kids.splice(indexOfProducts,1);
res.status(200),send(`deleted the product`);
res.send();
})
module.exports = router;