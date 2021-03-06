var Product = require('../models/product');
var User = require('../models/user');
var Category = require('../models/category');
var mongoose = require('mongoose');
var dotenv = require('dotenv');
const chalk = require('chalk');
mongoose.Promise = global.Promise;


dotenv.load({ path: '.env.example' });
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);
mongoose.connection.on('error', () => {
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});
Product.remove({},function(err,results) {
	if (err) {
		console.log('error: ', err.message);
		process.exit(-1);
	}
	console.log('Results: ' + JSON.stringify(results));
	Category.remove({}, function(err,results) {
		if (err) {
			console.log('error: ', err.message);
			process.exit(-1);
		}
		console.log('Results: ' + JSON.stringify(results));
	});
	process.exit();
});
