var express = require('express');
var router = express.Router();
var usuario = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',(req,res,next)=>{
  usuario.login(req.body.email,req.body.passwd,(e,d) => {
    if (d) {
      res.send('Login correcto');
      ses=req.session;
      console.log(ses.id);
    } else {
      res.json(e);
    }
  });
});

module.exports = router;
