'use strict'

require('dotenv').config();
const express = require('express');
const app = express();
const validatePokemonData = require('./middleware/validatePokemonData');
const {errorHandler} = require('./utils/errors');
const pokemonRouter = require('./router/pokemonRouter');
const trainerRouter = require('./router/trainerRouter');
const morgan = require('morgan');

app.use(express.json());
app.use(morgan('tiny'));

app.get("/", (_req,res) => {
    res.send("Hello World!");
})

//routers
app.use('/api/pokemons', pokemonRouter);
app.use('/api/trainers', trainerRouter);


app.use(errorHandler); // This is the error handler middleware every route will use if an error is thrown

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});