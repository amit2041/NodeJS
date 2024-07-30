import express from 'express'
import ProductController from './src/Controllers/product.controller.js';

const server = express();
//create an instance of ProductController
const productController = new ProductController();
server.get('/', productController.getProducts)
    server.use(express.static('src/Views'))

server.listen(3400);
console.log('Server is listening on 3400');
