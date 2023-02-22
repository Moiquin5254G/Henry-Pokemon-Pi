const axios = require('axios');
const cleanArray = require('../Controllers/cleanArray');

const getPokemonByIdApi = async (idSearch) => {
    try {
        const data = await axios(`https://pokeapi.co/api/v2/pokemon/${idSearch}`);
        const result = data.data;
        return await cleanArray([result]);
    } catch (error) {
        return { error: error.message };
    }
}

module.exports = getPokemonByIdApi;