const getPokemonByIdApi = require('../searchId/searchId');
const { Pokemon, Type } = require('../db');

const getPokemonsById = async (id, source) => {
    try {
        const pokemonRaw =
            source === 'api' ?
                await getPokemonByIdApi(id) :
                await Pokemon.findByPk(id, {
                    include: {
                        model: Type,
                        attributes: ['name'],
                        through: { attributes: [] }
                    }
                })

        if (source === 'api') {
            if (pokemonRaw.length < 1) {
                throw new Error(`Couldn't find pokemon with id ${id} in the api, sorry😔😔😔!!`);
            }

            return {
                id: pokemonRaw.id,
                name: pokemonRaw.name,
                hp: pokemonRaw.stats[0].base_stat,
                attack: pokemonRaw.stats[1].base_stat,
                defense: pokemonRaw.stats[2].base_stat,
                speed: pokemonRaw.stats[5].base_stat,
                height: pokemonRaw.height,
                weight: pokemonRaw.weight,
                image: pokemonRaw.sprites.other.home.front_default,
                types: pokemonRaw.types.map(type => type.type.name),
                created: false
            }
        }

        if(pokemonRaw === null) throw new Error(`The pokemon with id ${id} does not exist in the database, sorry😔😔😔!!`)
        
        return {
            id: pokemonRaw.id,
            name: pokemonRaw.name,
            hp: pokemonRaw.hp,
            attack: pokemonRaw.attack,
            defense: pokemonRaw.defense,
            speed: pokemonRaw.speed,
            height: pokemonRaw.height,
            weight: pokemonRaw.weight,
            image: pokemonRaw.image,
            types: pokemonRaw.Types.map(type => type.name),
            created: pokemonRaw.created
        }

    } catch (error) {
        return { error: error.message };
    }
}


module.exports = getPokemonsById;