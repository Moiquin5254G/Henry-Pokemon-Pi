const { Pokemon, Type } = require('../db');
const axios = require('axios');
const cleanArray = require('./cleanArray');
const cleanArrayDb = require('./cleanArrayDb');

const getAllPokemons = async () => {
    const dataBasePokemon = await Pokemon.findAll({
        include: {
            model: Type,
            attributes: ['name'],
            through: { attributes: [] }
        }
    });

    const apiPokemonRaw = [];
    
    for(let i = 1; i < 81; i++) {
        apiPokemonRaw.push((await axios(`https://pokeapi.co/api/v2/pokemon/${i}`)).data);
    }
    const apiPokemon = cleanArray(apiPokemonRaw);
    const dbPokemon = cleanArrayDb(dataBasePokemon);
    const results = [...dbPokemon, ...apiPokemon];
    return results;
}

module.exports = getAllPokemons;