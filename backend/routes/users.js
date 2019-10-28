const express = require('express');
const router = express.Router();

/* GET users listing. */
module.exports = knex => {
  router.get('/', function(req, res, next) {
    knex
      .select('*')
      .from('users')
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        console.log(error);
      });
  });

  // selecting specific user's decks
  router.get('/:id/decks', function(req, res, next) {
    const { id } = req.params;
    knex
      .select('decks.*', 'subjects.name as subject_name')
      .from('users')
      .innerJoin('decks', 'users.id', 'decks.user_id')
      .innerJoin('subjects', 'decks.subject_id', 'subjects.id')
      .where({ user_id: id })
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        console.log(error);
      });
  });

  return router;
};