const { Pokemon, Type } = require('../db');
const axios = require('axios');
const cleanArray = require('../Controllers/cleanArray');
const { Op } = require('sequelize');

const searchNameDb = async (name) => {
    // try {
        const dbName = await Pokemon.findAll({
            where: {
                name: { [Op.iLike]: `%${name}%` }
            },
            include: {
                model: Type,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        });
        // console.log(dbName);
        return dbName
    // } catch (error) {
    //     return error;
    // }
};

const searchNameApi = async (name) => {
    try {
        const data = await axios(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
        const result = data.data;
        console.log(result);
        return await cleanArray([result]);
    } catch (error) {
        return [];
    }
}

module.exports = {
    searchNameApi,
    searchNameDb
}