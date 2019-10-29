const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");

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

    // selecting specific user
  router.get('/:id', function(req, res, next) {
    const { id } = req.params;
    knex
      .select('*')
      .from('users')
      .where({ id: id })
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

  // create new user
  router.post('/register', function(req, res, next) {
    const hashedPw = bcrypt.hashSync(req.body.password, 10)

    knex('users').insert({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: hashedPw}, ['id'])
      .then(result => res.json(result[0].id))
      .catch(error => console.log(error))
  })

  // check for existing user
  router.post('/login', function(req, res, next) {
    knex
      .select('*')
      .from('users')
      .where({ email: req.body.email })
      .then(result => {
        const user = result[0];

        if (user) {
          if (bcrypt.compareSync(req.body.password, user.password)) {
            res.json(user.id);
          } else {
            res.json(undefined);
          }
        } else {
          res.json(undefined);
        }
        
      })
      .catch(error => console.log(error))
  })

  return router;
};