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

  router.get('/:id', function(req, res, next) {
    const { id } = req.params;
    Promise.all([
      knex
      .select('decks.*', 'subjects.name as subject_name')
      .from('decks')
      .innerJoin('subjects', 'decks.subject_id', 'subjects.id')
      .where('decks.id', id), 
      knex('cards') 
        .count('id as card_count')
        .where('deck_id', id) 
    ])  
      .then(result => {
        const deckInfo = result[0][0]
        const final = { ...deckInfo, card_count: result[1][0].card_count}
        res.json(final);
      })
      .catch(error => {
        console.log(error);
      });
  });

  // get deck by set link
  // if visited in react router Redirect to id? or !! render cards !!
  router.get('/:link', function(req, res, next) {
    const { link } = req.params;
    knex
      .select('*')
      .from('decks')
      .where({ link: link })
      .then(result => {
        res.json(result[0]);
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

  // create deck
  router.post('/', function(req, res, next) {
    knex('subjects').insert({
      name: req.body.name}, ['id'])
      .then(result => {
        knex('decks').insert({
          user_id: req.body.user_id,
          name: req.body.title,
          description: req.body.description,
          subject_id: result[0].id,
          link: req.body.link}, ['id'])
          .then(result => {
            res.json(result[0].id);
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  });

  // delete specific deck
  router.post('/delete/:id', function(req, res, next) {
    const { id } = req.params;
    knex
    .select('*')
    .from('decks')
    .where({ id: id })
    .del()
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      console.log(error);
    });
  })

  // create cards in deck
  router.post('/:id/cards', function(req, res, next) {

    knex('cards').insert({
        deck_id: req.body.deck_id,
        term: req.body.term,
        definition: req.body.definition,
        image: req.body.image}, ['id'])
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        console.log(error);
      });
  });

  return router;
};
