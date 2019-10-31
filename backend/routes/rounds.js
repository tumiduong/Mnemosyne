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

  // get all rounds of a user 
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

  return router;
};