const request = require('supertest');
const app = require('../index');
const Product = require ('../models/Products');
const productController = require('../controllers/productController');
const {showProducts,  createProduct, updateProduct, deleteProduct} = require('../controllers/productController');
const mongoose = require('mongoose');

const SECONDS = 1000;
