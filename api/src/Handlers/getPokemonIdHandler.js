const getPokemonById = require('../Controllers/getPokemonById');


const getPokemonsIdHandler = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? 'db' : 'api'
    try {
        const result = await getPokemonById(id, source);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(404).send({ error: error.message });
    }
}

module.exports = getPokemonsIdHandler;