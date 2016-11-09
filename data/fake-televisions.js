var Product = require('../models/Product');
var Category = require('../models/Category');
var mongoose = require('mongoose');
const chalk = require('chalk');
var dotenv = require('dotenv');
var faker = require('faker');
mongoose.Promise = global.Promise;

dotenv.load({ path: '.env.example' });
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);
mongoose.connection.on('error', () => {
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});
// Product.remove({},function(err,results) {});
// Category.remove({},function(err,results) {});
products = [];
categories = ['Business','Sports','Cats','City','Technics'];
brands = ['Sony','LG','Generic','PROSCAN','Apple','Dell','Flimsy','Freds','Throwback'];
resolutions = ['1080p','1080l','720p','1440p','4k','8k'];
var done = 0;
for (var i=0; i < 100; i++) {
	var code = 1000 + i;
	var color = faker.commerce.color();
	var materialBrand = faker.commerce.productMaterial();

	typeNum = Math.floor((Math.random() * categories.length-1) + 1);
	brandNum = Math.floor((Math.random() * brands.length-1) + 1);
	resNum = Math.floor((Math.random() * resolutions.length-1) + 1);
	resolution = resolutions[resNum];
	brand = brands[brandNum];
	imagePath = '/img/' + brand.toLowerCase() + '-television.jpg'
	var productcategory = categories[typeNum];
	name = brand + ' ' + faker.commerce.productName();
	name = name.toUpperCase();
	price = faker.commerce.price(),

	product = new Product({
		code: code,
		name: name,
		title: faker.commerce.productAdjective() + ' ' + color + ' ' + name + ' ' + 'Television',
		description: faker.lorem.sentence(),
		taxable: 'Yes',
		shipable: 'Yes',
		price: price,
		'Product_Group': 'Television',
		category: 'Television',
		Attributes: [{
			Name: 'color',
			Value: color
		},{
			Name: 'brand',
			Value: brand
		},{
			Name: "Screen Size",
			value: faker.random.number(26,75)
		},{
			Name: 'Resolution',
			value: resolution
		},{
			Name: 'Number of Ports',
			Value: faker.random.number(0,6)
		},{
			Name: 'Price',
			Value: price
		}],
		imagePath: imagePath
	});
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
