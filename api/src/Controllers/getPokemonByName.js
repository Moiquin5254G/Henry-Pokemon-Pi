const { searchNameApi, searchNameDb } = require('../searchName/searchName');

const getPokemonsByName = async(name) => {
    const pokeApi = await searchNameApi(name);
    const pokeDb = await searchNameDb(name);

    if(!pokeApi.length && !pokeDb.length) 
    throw new Error(`The pokemon with the name ${name} does not exits.`);

    const pokemonName = [...pokeApi, ...pokeDb];
    return pokemonName;
}

module.exports = getPokemonsByName; 