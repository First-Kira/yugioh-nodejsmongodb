const express = require('express');
const mongoose = require('mongoose');
const Card = require('./models/Card');

const app = express();

mongoose.connect('mongodb://localhost:27017/yugioh', { useNewUrlParser: true, useUnifiedTopology: true });

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', async (req, res) => {
  const cards = await Card.find();
  res.render('index', { cards });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
