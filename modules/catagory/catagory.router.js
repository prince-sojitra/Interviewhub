var express = require('express');
var router = express.Router();
var CATAGORYCONTROLLER = require('./catagory.controller')
var ADMINSEQURE = require("../admin/admin.middleware")

router.post('/create',ADMINSEQURE.Sequre,CATAGORYCONTROLLER.catagoryCreate);
router.get('/',ADMINSEQURE.Sequre,CATAGORYCONTROLLER.catagoryFind);
router.delete('/:id',ADMINSEQURE.Sequre,CATAGORYCONTROLLER.catagoryDelete);
router.patch('/:id',ADMINSEQURE.Sequre,CATAGORYCONTROLLER.catagoryUpdate);

module.exports = router;
