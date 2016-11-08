var Product = require('../models/Product');
var Category = require('../models/Category');
var dotenv = require('dotenv');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var slug = require('slug');
dotenv.load({ path: '.env.example' });
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);
mongoose.connection.on('error', () => {
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});

Category.remove({});

Product.find().distinct('category', function(err,categories) {
	if (err) {
		console.log("error " + err.message);
		exit();
	}
	var done = 0;
	for (var i = 0; i < categories.length; i++) {
		if (!categories[i]) {
			console.log('products not defined');
			exit();
		}
		var cname = categories[i];
		console.log('cname ' + cname);
		var cslug = slug(cname);
		category = new Category({
			name: cname,
			slug :cslug
		})
		category.save(function(){
			done++;
			if (done==categories.length) {
				exit();
			}
		})
	}
});

function exit() {
	mongoose.disconnect() 
}
