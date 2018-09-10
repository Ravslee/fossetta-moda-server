const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: String,
    price: String,
    description: String,
    images:Array,
    primaryImage:String,
   
}, {
    timestamps: true
});
module.exports = mongoose.model('Product', ProductSchema);
