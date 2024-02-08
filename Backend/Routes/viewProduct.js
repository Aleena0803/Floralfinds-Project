const express= require('express');
const router=express.Router();

// creating API for getting all products
app.get('/allproducts',async (req,res)=>{
    let products = await Product.find({})
    console.log("All Products Fetched");
    res.send(products);
})

module.exports=router;

