    const validateUrl = (URL) => {
    const regex = new RegExp(/(https?:\/\/.*\.(?:png|jpg|svg))/);
    return regex.test(URL);
};


export const validate = (info) => {
    let error = {};

    if(info.name.length > 0 && info.name.length < 4) error.name = 'The name must have a minimum of 5 letters😐😐!!';
    if(info.name.length > 15) error.name = 'The name cannot have more than 15 letters🤔🤔!!';
    if(info.strength <= 0) error.strength = 'Need strength🤔🤔!!';
    if(info.defense <= 0) error.defense = 'Need defense🤔🤔!!';
    if(info.attack <= 0) error.attack = 'Need attack🤔🤔!!';
    if(info.height <= 0) error.height = 'Need height🤔🤔!!';
    if(info.weight <= 0) error.weight = 'Need weight🤔🤔!!';
    if(info.speed <= 0) error.speed = 'Need speed🤔🤔!!';
    if(!info.name) error.name = 'You must   put a name😐😐!!';
    if(info.hp <= 0) error.hp = 'Need hp🤔🤔!!';
    if(validateUrl(info.image) && info.image !== '') error.image = 'Unsupported format🤔🤔!!';
    return error;
}