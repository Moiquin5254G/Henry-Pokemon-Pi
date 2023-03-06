import './Example.css';
import React from "react";
import pika from '../../image/Pika.gif';


export const Example = ({ name, id, image, hp, attack, defense, speed, height, weight, types }) => {
    while (!image) {
        image = pika
    };

    return (
        <div className='poke-card'>
            <div>{name}</div>
            <div className='img-container'>
                <img className='poke-img' src={image} alt={name} />
            </div>
            <div>N° {id + 1}</div>
            {types[0] && <div className={`poke-types${types[0]}`}>{types[0]}</div>}
            {types[1] && <div className={`poke-types${types[1]}`}>{types[1]}</div>}

            <div className="poke-stats">Hp: <p>{hp}</p></div>
            <div className="poke-stats">Attack: <p>{attack}</p></div>
            <div className="poke-stats">Defense: <p>{defense}</p></div>
            <div className="poke-stats">Speed: <p>{speed}</p></div>
            <div className="poke-stats">Height: <p>{height}</p></div>
            <div className="poke-stats">Weight: <p>{weight}</p></div>
        </div>
    )
};