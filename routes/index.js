var express = require('express');
var router = express.Router();

const Drink = require('../models/drink');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({ title: 'COCKTAILZZZZZ' });
});

router.get('/:drinksId', (req, res, next) => {
  const drinksId = req.params.drinksId;
  Drink
    .findById(drinksId, (err, drink) => {
      if (err) { return res.json(err).status(500); }

      return res.json(drink);
    });
});

module.exports = router;
