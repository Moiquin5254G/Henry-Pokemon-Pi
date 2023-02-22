const getPokemonByName = require('../Controllers/getPokemonByName');
const getAllPokemons = require('../Controllers/getAllPokemons');

const getAllPokemonsHandler = async(req, res) => {
    const { name } = req.query;

    try {
        const results = name ? await getPokemonByName(name) : await getAllPokemons();
        return res.status(200).json(results);
    } catch (error) {
        return res.status(404).send(error);
    }
}

module.exports = getAllPokemonsHandler;