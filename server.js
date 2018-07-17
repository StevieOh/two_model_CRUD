const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override')

require('./db/db')

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended:false}));

const bookController = require('./controllers/bookController');
app.use('/books', bookController);

const authorController = require('./controllers/authorController');
app.use('/author', authorController);

app.get('/', (req, res) => {
 res.render('index.ejs');
});

app.listen(3000, () => {
  console.log('listening on port 3000')
})