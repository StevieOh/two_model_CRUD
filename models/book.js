const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  author: String,
  title: {
    type: String,
    required: true
  },
});



module.exports = mongoose.model("Book", bookSchema);