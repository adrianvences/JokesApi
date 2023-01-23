const mongoose = require('mongoose'); 
const colors = require('colors');

//  we put this in an arrow func 
// weve now created a var that we can now export 
const connectDb = () => {
// VVVV this line gets rid of deprecation warning 
mongoose.set('strictQuery', false);
mongoose 
.connect (process.env.MONGO_URI, {
  // what retry does that in the case of a network outage and a write operation it retries that write until it submits\
// only v6 mongo 
  retryWrites: true,
})

// this is a special mongoose thing called a thenable not exactly a .this promise
.then(() => console.log(colors.america("DB connection established")))
.catch((err) =>
  console.log("something went wrong ...", err));

}; 

module.exports = connectDb 