const mongoose=require('mongoose');
const addproductSchema=new mongoose.Schema({
    id:{
        type: Number,
        required:true,
    },
    name:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        required:true,
    }, 
    category:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Number,
        default:Date.now,
    },
    avilable:{
        type:Boolean,
        default:true,
    },
})

const Product = mongoose.model("Product",addproductSchema);
module.exports = Product;
