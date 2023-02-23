const { Pokemon, Type } = require('../db');

const createInDb = async (name, hp, speed, height, attack, weight, defense, types, image) => {
    const pokemon = name.toLowerCase();
    const exists = await Pokemon.findOne({
        where: { name: pokemon }
    });
    if(exists) throw new Error(`The pokemon with name ${pokemon} already exits😅😅!!`);
    const id = await Pokemon.max('id');
    const newPokemon = { name, hp, speed, height, attack, weight, defense, types, image, id:(++id) };
    const pokemonCreate = await Pokemon.create(newPokemon);
    const typesDb = await Type.findAll({
        where: { name: types }
    });
    await pokemonCreate.addTypes(typesDb);
}

module.exports = createInDb;