var Product = require('../models/Product');
var Category = require('../models/Category');
var mongoose = require('mongoose');
var faker = require('faker');
var dotenv = require('dotenv');
const chalk = require('chalk');
mongoose.Promise = global.Promise;


dotenv.load({ path: '.env.example' });
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);
mongoose.connection.on('error', () => {
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});

products = [];
categories = ['Business','Sports','Cats','City','Abstract','Animals','Food','Nightlife','Technics'];
var done = 0;
for (var i=0; i < 100; i++) {
	var code = 1000 + i;
	var color = faker.commerce.color();
	var materialBrand = faker.commerce.productMaterial();
	typeNum = Math.floor((Math.random() * 8) + 1); 
	console.log(typeNum);
	var category = categories[typeNum];
	cat = new Category({
		name: category,
		slug: category.toLowerCase(),
		description: faker.lorem.sentence()
	});
	cat.save();
	name = faker.commerce.productName();
	imageFunction = eval('faker.image.' + category.toLowerCase() + '()');

	product = new Product({
		code: code,
		name: name,
		title: faker.commerce.productAdjective() + ' ' + color + ' ' + name,
		description: faker.lorem.sentence(),
		taxable: 'Yes',
		shipable: 'Yes',
		price: faker.commerce.price(),
		productType: materialBrand,
		category: category,
		attributes: [{
			name: 'color',
			value: color
		},{
			name: 'brand',
			value: materialBrand
		}],
		imagePath: imageFunction
	});
	category = new Category({
		name: category,
		description: null,
		slug: category.toLowerCase()
	})
	category.save(function(err) {
		if (err) {
			console.log('error',err.message);
		}
	})
	product.save(function(err) {
		if (err) {
			console.log('error: ',err.message);
		}
	});
	done++;
	if (done==100) {
		exit();
	}
}

function exit() {
	mongoose.disconnect() 
}
