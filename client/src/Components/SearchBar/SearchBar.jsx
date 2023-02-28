import './SearchBar.css';
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../../Redux/actions";


export const SearchBar = ({ setPage }) => {
    const dispatch = useDispatch();
    const [Name, setName] = useState('');

    const handlerInput = (e) => {
        e.preventDefault();
        setName(e.target.value);
    };

    const handlerButton = (e) => {
        if (Name === '') {
            alert('There is nothing to look for😐😐!!')
        } else {
            e.preventDefault();
            dispatch(getPokemonByName(Name));
            setName('');
            setPage();
        };
    };

    return (
        <header className='container-search'>
            <Link to='/' className='logo'>
                <img src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png" alt="Logo Pokedex" />
            </Link>

            <form onChange={(e) => handlerInput(e)}>
                <div className='form-group'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='icon-search'
						>
                        <path d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' />
                    </svg>
                    <input type="text" placeholder='search...' onChange={(e) => {console.log('ignorar')}} value={Name} required='required' />
                    <button type='submit' onClick={(e) => handlerButton(e)} className='btn-search' >Search</button>
                </div>
            </form>
            <Link to={'/create'}>
                <button className="btn-create">Create a Pokemon</button>
            </Link>
        </header>
    );
};