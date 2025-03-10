const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    const products = adminData.products;
    console.log("Products: ", products);
    res.render('shop', { 
        pageTitle: 'Shop',
        prods: products,
        path: '/'
    });
});

module.exports = router;