var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: "Bienvenue sur TCHAT-CHEUR - le chat qui nous rapproche" });
});

module.exports = router;
