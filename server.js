const express = require('express');
// ########## CISCO WAY

const app = express();

const dotenv = require('dotenv'); 
dotenv.config();

// here we import it 
const connectDb = require('./config/mongoose.config');
// we use it 
connectDb();

// to accept json
app.use(express.json());

const jokeRouter = require('./routes/joke.routes');
app.use('/api/jokes', jokeRouter)


const colors = require('colors'); 

const PORT = process.env.PORT;
app.listen(PORT, () => 
  console.log (colors.rainbow(`listening on port : ${PORT}`))
);