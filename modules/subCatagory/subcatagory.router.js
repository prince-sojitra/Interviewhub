var express = require('express');
var router = express.Router();
var SUBCATAGORYCONTROLLER = require('./subcatagory.controller')
var ADMINSEQURE = require("../admin/admin.middleware")

router.post('/create',ADMINSEQURE.Sequre,SUBCATAGORYCONTROLLER.subcatagoryCreate);
router.get('/',ADMINSEQURE.Sequre,SUBCATAGORYCONTROLLER.subcatagoryFind);
router.get('/count',ADMINSEQURE.Sequre,SUBCATAGORYCONTROLLER.subcatagoryCount);
router.delete('/:id',ADMINSEQURE.Sequre,SUBCATAGORYCONTROLLER.subcatagoryDelete);
router.patch('/:id',ADMINSEQURE.Sequre,SUBCATAGORYCONTROLLER.subcatagoryUpdate);

module.exports = router;
