const Joke = require("../models/joke.model");

const create = (req, res) => {
  Joke.create(req.body)
    .then((joke) => res.status(201).json(joke))
    .catch((err) => res.status(400).json(err));
};

const findAll = (req, res) => {
  Joke.find()
    .then((jokes) => res.status(200).json(jokes))
    .catch((err) => res.status(400).json(err));
};

const findOne = (req, res) => {
  const { id } = req.params;
  Joke.findById(id)
    .then((joke) => res.status(200).json(joke))
    .catch((err) => res.status(400).json(err));
};

const updateOne = (req, res) => {
  const { id } = req.params;
  // dont trust yourself let it fill in
  Joke.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
    .then((joke) => res.status(200).json(joke))
    .catch((err) => res.status(400).json(err));
};

const deleteOne = (req, res) => {
  const { id } = req.params;
  Joke.findByIdAndDelete(id)
    .then((joke) => res.status(200).json(joke))
    .catch((err) => res.status(400).json(err));
};

// this will be an object because we exporting more than one
module.exports = { create, findAll, findOne, updateOne, deleteOne };
