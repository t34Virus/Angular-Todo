var express = require('express');
var router = express.Router();
var Todo = require('../models/todo');
// var ObjectId = require("mongoose").Types.ObjectId;
//list all todos
router.get('/', function(req, res){
  Todo.find( function(err, todos){
    if(err) throw err;
    res.json(todos); //no jade so no "render"
  });
});

//add todo
router.post('/', function (req, res){
  Todo.create({ title : req.body.title }, function (err, todo) {
    if(err) throw err;
    res.json(todo);
  });
});

//delete todo
router.delete('/:id', function (req, res) {
  Todo.findById(req.params.id)
    .remove()
    .exec(function (err, num_deleted, status) {
      if(err) throw err;
      res.json( status ); // status object
    });
});

//complete todo
router.put('/:id/complete', function (req, res) {
  Todo.update({_id : req.params.id},
    { 
      $set: {completed : true }}, function (err, update_count, result){
      if(err) throw err;
      res.json(result);  
  });
});

//incomplete todo
router.put('/:id/incomplete', function (req, res) {
  Todo.update({_id : req.params.id},
    { 
      $set: {completed : false }}, function (err, update_count, result){
      if(err) throw err;
      res.json(result); 
  }); 
});

module.exports = router;

