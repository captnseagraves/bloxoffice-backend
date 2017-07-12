var express = require('express');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('hello');
  knex('users')
.select('id', 'name', 'wallet_address')
.then((userFromKnex) => {
  console.log(userFromKnex);
  res.send(userFromKnex);
})
});

module.exports = router;
