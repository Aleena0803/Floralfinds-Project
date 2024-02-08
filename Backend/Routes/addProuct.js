const express= require('express');
const router=express.Router();
const Product=require('../Model/addproduct');

// API FOR ADDING PRODUCT
app.post('/addproduct',async (req,res)=>{
    let products = await Product.find({});
    let id;
    if(products.length>0)
    {
      let last_product_array = products.slice(-1);
      let last_product = last_product_array[0];
      id = last_product.id+1
    }
    else{
        id=1; 
    }
    const product = new Product({
        id:req.body.id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });  
    console.log(product);
    await product.save();
    console.log("saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})

module.exports=router;
