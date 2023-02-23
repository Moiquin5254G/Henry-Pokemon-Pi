const getApiTypes = require('../Controllers/getApiTypes');

const getPokemonTypeHandler = async(req, res) => {
    try {
        let types = await getApiTypes();
        res.status(200).json(types);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

module.exports = getPokemonTypeHandler;