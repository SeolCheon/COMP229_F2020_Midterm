/*File name : books.js
  Author's name : Seol Cheon
  Student ID : 301113120
  Web site name : My Favourite Books
  date : Oct 30, 2020 */

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
