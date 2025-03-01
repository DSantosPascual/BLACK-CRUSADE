// test/setup.js
const mongoose = require('mongoose');


mongoose.connect = jest.fn();
mongoose.connection = {
    on: jest.fn(),
};