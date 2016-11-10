var Product = require('../models/Product');
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
brands = ['MongoDB','Fubu','Sean Jean'];
fabrics = ['wool','fur','fleece','paper','acrylic pellets','hemp'];
types = ['pullover','tee-shirt','pantsuit','jacket','vest'];
var done=0;
for (var i=0; i < 100; i++) {
	var code = 1000 + i;
	var color = faker.commerce.color();
	var materialBrand = faker.commerce.productMaterial();
	typeNum = Math.floor((Math.random() * brands.length-1) + 1);
	brandNum = Math.floor((Math.random() * brands.length-1) + 1);
	fabricNum = Math.floor((Math.random() * fabrics.length-1) + 1);
	type = types[typeNum];
	fabric = fabrics[fabricNum];
	brand = brands[brandNum];
	imagePath = '/img/' + type + '-clothes.jpg'
	var category = 'Apparel';
	name = faker.commerce.productName() + ' ' + type;
	price = faker.commerce.price();
	product = new Product({
		code: 'cam' + code,
		name: name,
		title: brand + ' ' + faker.commerce.productAdjective() + ' ' + color + ' ' + name,
		description: faker.lorem.sentence(),
		taxable: 'Yes',
		shipable: 'Yes',
		price: price,
		'Product_Group': 'Apparel',
		category: 'Apparel',
		Attributes: [{
			Name: 'color',
			Value: color
		},{
			Name: 'brand',
			Value: brand
		},{
			Name: "Fabric",
			Value: fabric
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
	mongoose.disconnect();
}
