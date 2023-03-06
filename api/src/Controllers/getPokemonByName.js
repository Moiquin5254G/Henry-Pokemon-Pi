const { searchNameApi, searchNameDb } = require('../searchName/searchName');

const getPokemonsByName = async(name) => {
    try {
        const pokeDb = await searchNameDb(name);
        const pokeApi = await searchNameApi(name);
        // console.log(pokeDb);
    
        if(!pokeApi.length && !pokeDb.length) {
            throw new Error(`The pokemon with the name ${name} does not exits😵😵!!`);
        } else {
            const pokemonName = [...pokeApi, ...pokeDb];
            return pokemonName;
        }
    } catch (error) {
        return { error: error.message };
    }
}

module.exports = getPokemonsByName; 