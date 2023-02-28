import './Card.css';
import React from "react";
import { Link } from 'react-router-dom';

export const Card = ({ image, name, id, type }) => {
    return (
        <Link to={'/pokemons/' + id} className='card-pokemon'>
            <div className='card-img'>
                <img src={image} alt={`Pokemon ${name}`} />
            </div>
            <div className='card-info'>
                <span className='pokemon-id'>N° {id}</span>
                <h3>{name}!</h3>
                <div className='card-types'>
                    {type?.map((element) => (<span key={element.name} className={element.name}>{element.name}</span>))}
                </div>
            </div>
        </Link>
    );
};