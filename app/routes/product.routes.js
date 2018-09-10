module.exports = (product) => {
    const products = require('../controllers/product.controller.js');

    // Create a new Note
    product.post('/products', products.create);

    // Retrieve all Notes
    product.get('/products', products.findAll);

    // Retrieve a single Note with noteId
    product.get('/products/:productId', products.findOne);

    // Update a Note with noteId
    product.put('/products/:productId', products.update);

    // Delete a Note with noteId
    product.delete('/products/:productId', products.delete);
}