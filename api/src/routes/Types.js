const { Router } = require('express');
const getPokemonTypeHandler = require('../Handlers/getPokemonTypeHandler');

const typeRouter = Router();

typeRouter.get('/', getPokemonTypeHandler);


module.exports = typeRouter;
