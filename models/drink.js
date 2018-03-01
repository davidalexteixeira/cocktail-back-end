
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DrinkSchema = new Schema({
  name: String,
  type: String,
  ingredients: [
    {
      name: String,
      quantity: Number,
      unit: String
    }
  ]
});

const Drink = mongoose.model('Drink', DrinkSchema);

module.exports = Drink;
