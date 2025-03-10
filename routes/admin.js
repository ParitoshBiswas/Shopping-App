const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.render('add-product', { 
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    });
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    // console.log("Value at line 17: ", req.body);
    products.push({ title: req.body.title });
    res.redirect('/');
});

exports.routes = router;
exports.products = products; // exporting products array to be used in other files