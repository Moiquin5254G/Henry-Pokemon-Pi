const { Pokemon } = require('../db');

const deleteInDb = async (id) => {
    const pokemon = await Pokemon.findByPk(id);
    if(pokemon) await pokemon.destroy();
}

module.exports = deleteInDb;