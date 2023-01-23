const express = require("express");
const jokeRouter = express.Router();

const {
  create,
  findAll,
  findOne,
  updateOne,
  deleteOne,
} = require("../controllers/joke.controller");


jokeRouter
  .route('/')
  // these two share the same route but its different because of the methods get and post 
  .get(findAll)
  .post(create);

jokeRouter
  .route('/:id')
  .get(findOne)
  .put(updateOne)
  .delete(deleteOne);

module.exports = jokeRouter;

