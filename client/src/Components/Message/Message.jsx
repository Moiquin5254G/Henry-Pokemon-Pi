import './Message.css';
import React from "react";
import { Link } from 'react-router-dom';
import Poke404 from '../../image/Poke404.png';


export const Message = () => {
    return (
        <div className='container-mess'>
            <div className='message'>
                <h1>4</h1>
                <img src={Poke404} alt='Poke404' />
                <h1>4</h1>
            </div>
            <div className='infor'>
                <span>Page not Found😔😔!!</span>
                <Link to={'/pokemons'}>
                    <button>⬅Back!!</button>
                </Link>
            </div>
        </div>
    )
};