const createInDb = require('../Controllers/createInDb');

const createPokemonHandler = async(req, res) => {
    const { name, hp, speed, height, attack, weight, defense, types, image } = req.body;
    try {
        const creation = createInDb(name, hp, speed, height, attack, weight, defense, types, image);
        res.status(200).send('The pokemon has been created successfully😉😉!!');
    } catch (error) {
        res.status(404).json({ error: `Couldn't create pokemon😢😢!!` });
    }
}

module.exports = createPokemonHandler;