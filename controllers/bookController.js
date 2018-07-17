const express = require('express');
const router = express.Router();
const Book = require('../models/book')

router.get('/books', (req, res) => {
 res.render('./books/index.ejs')
})


router.get('/new', (req, res) => {
 res.render('new.ejs') 
})

router.post('/', (req, res) => {
 console.log(req.body)
 Book.create(req.body, (err, createdBook) => {
   console.log(createdBook, '<---- this is createdBook');
   res.redirect('/book');
 })
})


module.exports = router;