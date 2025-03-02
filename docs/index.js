// docs/index.js
const swaggerJsdoc = require('swagger-jsdoc');
const basicInfo = require('./basicInfo');
const components = require('./components');
const products = require('./products');

const options = {
  definition: {
    ...basicInfo,
    components: components,
    paths: products.paths,
  },
  apis: ['../index.js'], 
};

const specs = swaggerJsdoc(options);

module.exports = specs;