const { Router } = require("express");
const getAllPokemonsHandler = require('../Handlers/getAllPokemonsHandler');
const getAllPokemonsIdHandler = require('../Handlers/getPokemonIdHandler');
const createPokemonHandler = require('../Handlers/createPokemonHandler');
const deletePokemonHandler = require('../Handlers/deletePokemonHanler');
const validate = require('../middlewares/index');

const pokemonsRoute = Router();

pokemonsRoute.get('/', getAllPokemonsHandler);
pokemonsRoute.get('/:id', getAllPokemonsIdHandler);
pokemonsRoute.post('/', validate, createPokemonHandler);
pokemonsRoute.delete('/:id', deletePokemonHandler);

module.exports = pokemonsRoute;