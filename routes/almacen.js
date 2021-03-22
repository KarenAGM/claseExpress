var express = require('express');
var router = express.Router();
var session = require('express-session');
var checkAutorizacion = require('../autorizacion/general');

router.get('/alta',checkAutorizacion,(req,res,next)=>{
    var ses = req.session;
    res.render("almacen/frmAlta",{user : ses.userdata, token:ses.token});
});

router.get('/reporte',(req,res,next)=>{
    res.render("almacen/frmReporte",{user : ses.userdata,token:ses.token});
});

router.get('/baja',(req,res,next)=>{
    res.render("almacen/frmBaja",{user : ses.userdata,token:ses.token});
});

module.exports = router;