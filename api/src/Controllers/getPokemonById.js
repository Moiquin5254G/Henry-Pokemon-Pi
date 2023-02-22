const getPokemonByIdApi = require('../searchId/searchId');
const { Pokemon, Type } = require('../db');

const getPokemonsById = async(idSearch, source) => { 
    try {
        const pokemonRaw =
        source === 'api' ?
        await getPokemonByIdApi(idSearch) :
        await Pokemon.findByPk(idSearch, {
            include: {
                model: Type,
                attributes: ['name'],
                through: { attributes: [] }
            }
        })

        if(!pokemonRaw) {
            throw new Error(`Couldn't find pokemon with id ${idSearch}, sorry😔😔😔`)
        }
        return pokemonRaw;

    } catch (error) {
        return { error: error.message };
    }
}


module.exports = getPokemonsById;