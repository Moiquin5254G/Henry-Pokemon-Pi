const { Router } = require("express");
const getAllPokemonsHandler = require('../Handlers/getAllPokemonsHandler');

const pokemonsRoute = Router();

pokemonsRoute.get('/', getAllPokemonsHandler);

module.exports = pokemonsRoute;