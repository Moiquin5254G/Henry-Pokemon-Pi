const { Pokemon, Type } = require('../db');
const axios = require('axios');
const cleanArray = require('../Controllers/cleanArray');

const searchNameDb = async (name) => {
    try {
        const result = await Pokemon.findAll({
            where: {
                name: name.toLowerCase(),
            }, 
            include: [{
                model: Type,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }]
        })
        return result;
    } catch (error) {
        return [];
    }
};

const searchNameApi = async (name) => {
    try {
        const data = await axios(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
        const result = data.data;
        return await cleanArray([result]);
    } catch (error) {
        return ({ error: 'Not Found' });
    }
}

module.exports = {
    searchNameApi,
    searchNameDb
}