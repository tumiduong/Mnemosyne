const express = require('express');
const router = express.Router();

/* GET decks listing. */
module.exports = knex => {
  router.get('/', function(req, res, next) {
    knex
      .select('*')
      .from('decks')
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        console.log(error);
      });
  });

  // showing all cards in deck
  router.get('/:id/cards', function(req, res, next) {
    const { id } = req.params;
    knex
      .select('cards.*')
      .from('cards')
      .innerJoin('decks', 'deck_id', 'decks.id')
      .where({ deck_id: id })
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        console.log(error);
      });
  });
  return router;
};