const express = require('express');
const router = express.Router();
const Book = require('../models/book')

router.get('/books', (req, res) => {
  Book.find({}, (err, allBooks) => {
    res.render('./books/index.ejs', {
      books: allBooks
    })
  })
})


router.get('/books/new', (req, res) => {
 res.render('new.ejs') 
})

router.post('/', (req, res) => {
 console.log(req.body)
 Book.create(req.body, (err, createdBook) => {
   console.log(createdBook, '<---- this is createdBook');
   res.redirect('/book');
 });
});


module.exports = router;