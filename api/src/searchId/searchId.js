const axios = require('axios');
// const cleanArray = require('../Controllers/cleanArray');

const getPokemonByIdApi = async (id) => {
    try {
        const data = (await axios(`https://pokeapi.co/api/v2/pokemon/${id}`)).data;
        return data
    } catch (error) {
        return [];
    }
}

module.exports = getPokemonByIdApi;