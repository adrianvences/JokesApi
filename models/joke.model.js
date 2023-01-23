const mongoose = require("mongoose");

const jokesSchema = mongoose.Schema(
  {
    // this is the first arguement
    // this is the schema this defines the shape of one doc in our collection
    setUp: {
      type: String,
      required: [true, "Please enter setup."],
      minLength: [2, "setUp must be at least 2 characters."],
    },
    comedian: {
      type: String,
      required: [true, "Please enter comedian name."],
      minLength: [2, "Comedian name must be at least 2 characters."],
    },
    punchLine: {
      type: String,
      required: [true, "Please enter punchline."],
      minLength: [2, "Punchline must be at least 2 characters."],
    },
    yourJoke: {
      type: Boolean,
      default: false,
    },
  },
  // if you wanted time stamps you need a sec arguement
  { timestamps: true }
);

// now we have to register this as a mongoose model

// mongoose will turn 'Joke' into jokes 
const Joke = mongoose.model('Joke', jokesSchema); 

module.exports = Joke;