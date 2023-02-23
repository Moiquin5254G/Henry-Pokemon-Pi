import React from "react";
import { Link } from 'react-router-dom';
import Style from './LandingPage.module.css';

export default function LandingPage() {
    return(
        <div>
            <div>
                <h1>POKEMONPAGE</h1>
            </div>
            <div>
                <Link to={'/pokemons'}>
                <button>START NOW😎😎!!</button>
                </Link>
            </div>
        </div>
    )
}