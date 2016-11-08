
const Product = require('../models/Product');
const Category = require('../models/Category');
/**
 * GET /
 * Shop Home page.
 */

exports.index = (req, res) => {
  Product.find({},function(err,products) {
    if (err) {
      req.flash('error', { msg: 'Problem retrieiving products.' });
      res.redirect(req.session.returnTo || '/');
    }
    Category.distinct('name',function(err,categories) {
      if (err) {
        req.flash('error', { msg: 'Problem retrieiving categories'});
        res.redirect(req.session.returnTo || '/');
      }
      console.log(JSON.stringify(categories));
        res.render('shop/shop', {
        title: 'Shop',
        products: products,
        categories: categories
      });
    });
  });
};
