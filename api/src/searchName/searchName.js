const { Pokemon, Type } = require('../db');
require('dotenv').config();
const LINK_API_POKEMONS = process.env;
const axios = require('axios');
const { Sequelize } = require('sequelize');

const searchNameDb = async (name) => {
    try {
        const searchPokemon = await Pokemon.findOne({
            where: Sequelize.where(
                Sequelize.fn('lower', Sequelize.col('pokemons.name')),
                Sequelize.fn('lower', name)
            ),

            include: {
                attributes: ["name"],
                model: Type,

            }
        });

        return searchPokemon;
    } catch (error) {
        return error;
    }
};

const searchNameApi = async (name) => {
    try {
        const pokemonRaw = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`).
            then((res) => res.data);
        return await cleanArray([pokemonRaw]);
    } catch (error) {
        return ({ error: 'Not Found' });
    }
}

module.exports = {
    searchNameApi,
    searchNameDb
}