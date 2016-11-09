const Product = require('../models/Product');
const Category = require('../models/Category');
/**
 * GET /
 * Shop Home page.
 */

exports.index = (req, res) => {
    Product.find({}, function(err, products) {
        if (err) {
            req.flash('error', {
                msg: 'Problem retrieiving products.'
            });
            res.redirect(req.session.returnTo || '/');
        }
        Category.distinct('name', function(err, categories) {
            if (err) {
                req.flash('error', {
                    msg: 'Problem retrieiving categories'
                });
                res.redirect(req.session.returnTo || '/');
            }
            Product.distinct('productType', function(err, productTypes) {
                if (err) {
                    req.flash('error', {
                        msg: 'Problem retrieiving product types'
                    });
                    res.redirect(req.session.returnTo || '/');
                }
                res.render('shop/search', {
                    title: 'Search',
                    products: products,
                    categories: categories,
                    productTypes: productTypes
                });
            })
        });
    });
};

exports.textSearch = (req, res) => {
    q = req.body.q
    Product.find({
            $text: {
                $search: q
            }
        }, {
            score: {
                $meta: "textScore"
            }
        })
        .sort({
            score: {
                $meta: 'textScore'
            }
        })
        .exec(function(err, products) {
            if (err) {
                req.flash('error', err.message);
                res.redirect('/');
            }
            Product.aggregate([{
                $match: {
                    $text: {
                        $search: q
                    }
                }
            }, {
                $sortByCount: "$category"

            }], function(err, results) {
                if (err) {
                    req.flash('error', {
                        msg: 'Problem retrieving products.'
                    });
                    res.redirect(req.session.returnTo || '/');
                }
                console.log('Results: ' + JSON.stringify(results));

                Category.distinct('name', function(err, categories) {
                    if (err) {
                        req.flash('error', {
                            msg: 'Problem retrieving categories'
                        });
                        res.redirect(req.session.returnTo || '/');
                    }
                    Product.distinct('Product_Group', function(err, productTypes) {
                        if (err) {
                            req.flash('error', {
                                msg: 'Problem retrieiving product types'
                            });
                            res.redirect(req.session.returnTo || '/');
                        }
                        res.render('shop/search', {
                            title: 'Search',
                            products: products,
                            categories: results,
                            q: q,
                            productTypes: productTypes
                        });
                    })
                });
            });
        });
};

exports.categoryIndex = (req, res) => {
    category = req.params.category;
    console.log("Category: " + category);
    Product.find({
        'category': category
    }, function(err, products) {
        if (err) {
            req.flash('error', {
                msg: 'Problem retrieiving products.'
            });
            res.redirect(req.session.returnTo || '/');
        }
        Category.distinct('name', function(err, categories) {
            if (err) {
                req.flash('error', {
                    msg: 'Problem retrieiving categories'
                });
                res.redirect(req.session.returnTo || '/');
            }
            Product.distinct('productType', function(err, productTypes) {
                if (err) {
                    req.flash('error', {
                        msg: 'Problem retrieiving product types'
                    });
                    res.redirect(req.session.returnTo || '/');
                }
                res.render('shop/search', {
                    title: 'Search',
                    products: products,
                    category: category,
                    categories: categories,
                    productTypes: productTypes
                });
            })
        });
    });
};

exports.productTypeSearch = (req, res) => {
    type = req.params.productType;
    Product.find({
        'productType': type
    }, function(err, products) {
        if (err) {
            req.flash('error', {
                msg: 'Problem retrieving products.'
            });
            res.redirect(req.session.returnTo || '/');
        }
        Category.distinct('name', function(err, categories) {
            if (err) {
                req.flash('error', {
                    msg: 'Problem retrieving categories'
                });
                res.redirect(req.session.returnTo || '/');
            }
            Product.distinct('productType', function(err, productTypes) {
                if (err) {
                    req.flash('error', {
                        msg: 'Problem retrieiving product types'
                    });
                    res.redirect(req.session.returnTo || '/');
                }
                res.render('shop/search', {
                    title: 'Search',
                    products: products,
                    categories: categories,
                    productTypes: productTypes,
                    productType: type,
                });
            })
        })
    });
};

exports.search = (req, res) => {
    var q = req.body.q;
    Product.find({}, function(err, products) {
        if (err) {
            req.flash('error', {
                msg: 'Problem retrieiving products.'
            });
            res.redirect(req.session.returnTo || '/');
        }
        Category.distinct('name', function(err, categories) {
            if (err) {
                req.flash('error', {
                    msg: 'Problem retrieiving categories'
                });
                res.redirect(req.session.returnTo || '/');
            }
            console.log(JSON.stringify(categories));
            res.render('shop/search', {
                title: 'Search',
                products: products,
                categories: categories,
                q: q
            });
        });
    });
};
