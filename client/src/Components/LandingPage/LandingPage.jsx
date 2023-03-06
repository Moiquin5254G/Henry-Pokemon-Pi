import React from "react";
import './LandingPage.css';
import { Link } from 'react-router-dom';

export const LandingPage = () => {
    return (
        <div className="Fond">
            <div className="tittle">
                <h1>POKEMONPAGE</h1>
            </div>
            <div className="button">
                <Link to={'/pokemons'}>
                    <button>START NOW!!</button>
                </Link>
            </div>
        </div>
    )
};