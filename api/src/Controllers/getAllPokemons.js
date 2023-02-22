const { Pokemon, Type } = require('../db');
const axios = require('axios');
const cleanArray = require('./cleanArray');

const getAllPokemons = async () => {
    console.log('algo');
    const dataBasePokemon = await Pokemon.findAll({
        include: {
            model: Type,
            atrributes: ['name'],
            through: { atrributes: [] }
        }
    });
    console.log(dataBasePokemon);
    const apiPokemonRaw = [];
    
    for(let i = 1; i < 21; i++) {
        const response = await axios(`https://pokeapi.co/api/v2/pokemon/${i}`)
        apiPokemonRaw.push(response.data);
        // console.log(apiPokemonRaw);
    }
    const apiPokemon = cleanArray(apiPokemonRaw);
    console.log(apiPokemon);
    const results = [...dataBasePokemon, ...apiPokemon];
    console.log(results);
    return results;
}

module.exports = getAllPokemons;