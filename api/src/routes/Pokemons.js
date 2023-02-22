const { Router } = require("express");
const getAllPokemonsHandler = require('../Handlers/getAllPokemonsHandler');
const getAllPokemonsIdHandler = require('../Handlers/getPokemonIdHandler');

const pokemonsRoute = Router();

pokemonsRoute.get('/', getAllPokemonsHandler);
pokemonsRoute.get('/:id', getAllPokemonsIdHandler)

module.exports = pokemonsRoute;