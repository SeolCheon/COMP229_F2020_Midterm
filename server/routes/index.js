/*File name : index.js
  Author's name : Seol Cheon
  Student ID : 301113120
  Web site name : My Favourite Books
  date : Oct 30, 2020 */

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
