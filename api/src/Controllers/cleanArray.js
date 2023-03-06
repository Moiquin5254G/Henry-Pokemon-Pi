const cleanArray = (array) => {
    const clean = array.map(element => {
        return {
            id: element.id,
            name: element.name,
            hp: element.stats[0].base_stat,
            attack: element.stats[1].base_stat,
            defense: element.stats[2].base_stat,
            speed: element.stats[5].base_stat,
            height: element.height,
            weight: element.weight,
            image: element.sprites.other.home.front_default,
            types: element.types.map(type => type.type.name),
            created: false
        }
    });

    return clean;
}


module.exports = cleanArray;