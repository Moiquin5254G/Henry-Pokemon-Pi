const cleanArrayDb = (array) => {
    const cleanDb = array.map(element => {
        return {
            id: element.id,
            name: element.name,
            hp: element.hp,
            attack: element.attack,
            defense: element.defense,
            speed: element.speed,
            height: element.height,
            weight: element.weight,
            image: element.image,
            types: element.Types.map(type => type.name),
            created: element.created
        }
    });
    return cleanDb;
}

module.exports = cleanArrayDb;