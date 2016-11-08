var Product = require('../models/product');
var User = require('../models/user');
var Order = require('../models/order');
var mongoose = require('mongoose');
var async = require('async');
var dotenv = require('dotenv');
mongoose.Promise = global.Promise;


dotenv.load({ path: '.env.example' });
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);
mongoose.connection.on('error', () => {
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});Product.remove({});
Order.remove({});

