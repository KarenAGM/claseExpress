var express = require('express');
var router = express.Router();
var usuario = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("frmLogin",{});
});

router.post('/login',(req,res,next)=>{
  usuario.login(req.body.email,req.body.passwd,(e,d) => {
    if (d) {
      //res.send('Login correcto');
      
      ses=req.session;
      console.log(ses.id);
      ses.userdata=d;
      console.log(ses);
      res.redirect('/');
    } else {
      res.json(e);
    }
  });
});

router.get('/logout', (req,res,next) => {
  req.session.destroy((falla)=> {
    if(falla){
      res.send(501,"error");
    }else{
      res.redirect('/');
    }
  });
});

module.exports = router;
