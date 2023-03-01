const { Pokemon, Type } = require('../db');
const axios = require('axios');
const cleanArray = require('./cleanArray');

const getAllPokemons = async () => {
    const dataBasePokemon = await Pokemon.findAll({
        include: {
            model: Type,
            atrributes: ['name'],
            through: { atrributes: [] }
        }
    });
    const apiPokemonRaw = [];
    
    for(let i = 1; i < 21; i++) {
        const response = await axios(`https://pokeapi.co/api/v2/pokemon/${i}`)
        apiPokemonRaw.push(response.data);
    }
    const apiPokemon = cleanArray(apiPokemonRaw);
    const results = [...dataBasePokemon, ...apiPokemon];
    return results;
}

module.exports = getAllPokemons;