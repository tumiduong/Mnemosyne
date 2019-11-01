const express = require('express');
const router = express.Router();

/* GET rounds listing. */
module.exports = knex => {

  router.get('/', function(req, res, next) {
    knex
      .select('*')
      .from('rounds')
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        console.log(error);
      });
  });

  // get random cards for round from a specific deck (id) 
  router.get('/:id', function(req, res, next) {
    const { id } = req.params;

    knex
      .select('cards.*', 'decks.id as deck_id','decks.name as deck_name', 'decks.description as deck_description', 'subjects.name as subject_name')
      .from('cards')
      .innerJoin('decks', 'cards.deck_id', 'decks.id')
      .innerJoin('subjects', 'decks.subject_id', 'subjects.id')
      .where('decks.id', id)
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        console.log(error);
      });
  });

  return router;
};