const { Pokemon, Type } = require('../db');
// require('dotenv').config();
// const LINK_API_POKEMONS = process.env;
const axios = require('axios');
const cleanArray = require('../Controllers/cleanArray');

const searchNameDb = async (name) => {
    try {
        const result = await Pokemon.findOne({
            where: {
                name: name,
            }, 
            include: [{
                model: Type,
                atrributes: ['name'],
                through: {
                    atrributes: []
                }
            }]
        })
        console.log(result);
        return result;
    } catch (error) {
        return error;
    }
};

const searchNameApi = async (name) => {
    try {
        const data = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const result = data.data;
        return await cleanArray([result]);
    } catch (error) {
        return ({ error: 'Not Found, el papi' });
    }
}

module.exports = {
    searchNameApi,
    searchNameDb
}