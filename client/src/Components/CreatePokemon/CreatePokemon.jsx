import './CreatePokemon.css';
import { validate } from './Validate';
import pika2 from '../../image/Pika2.gif';
import { Example } from '../Example/Example';
import Default from '../../image/Default.png';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTypes, postPokemon } from '../../Redux/actions';


export const CreatePokemon = () => {
    const dispatch = useDispatch();

    const types = useSelector(state => state.types);
    const pokemons = useSelector(state => state.allPokemons);
    const id = pokemons.length;
    console.log('This is id', id);

    const names = pokemons.map((element) => element.name);

    useEffect(() => {
        dispatch(getAllTypes())
    }, [dispatch]);

    const history = useHistory();
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState({});
    const [info, setInfo] = useState({
        name: '',
        hp: '',
        defense: '',
        attack: '',
        speed: '',
        height: '',
        weight: '',
        image: '',
        types: []
    });

    useEffect(() => {
        info.types.length > 2 || info.types.length === 0 || names.includes(info.name) ? setDisabled(true) : setDisabled(false);
    }, [names, info.name, info.types.length]);

    const handlerChangeInfo = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        });
        setError(
            validate({
                ...info,
                [e.target.name]: e.target.value
            }));
    };

    const handlerCheckBox = (e) => {
        if (e.target.checked) {
            setInfo({
                ...info,
                types: [...info.types, e.target.value]
            });
        };
        if (!e.target.checked) {
            info.types.splice(info.types.indexOf(e.target.value), 1);
            setInfo({
                ...info
            });
        };
    };

    // {
    //     method: 'POST',
    //     body: JSON.stringify(info),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }

    const handlerSubmit = (e) => {
        if (info.image === '') info.image = Default;
        e.preventDefault();
        dispatch(postPokemon({
            method: 'POST',
            body: JSON.stringify(info),
            headers: {
                'Content-Type': 'application/json'
            }
        }));
        setInfo({
            name: '',
            hp: '',
            defense: '',
            attack: '',
            speed: '',
            height: '',
            weight: '',
            image: '',
            types: []
        });
        alert('New Pokemon');
        setTimeout(() => {
            history.push('/pokemons');
        }, 1000);
    };

    return (
        <div className='all'>
            <div className='formulario'>
                <div className='titulo'>
                    <Link to={'/pokemons'}>
                        <h1>Create your Pokemon😏!!</h1>
                    </Link>
                    <img src={pika2} alt="piko" />
                    <Link to={'/pokemons'}>
                        <button>⬅Back!!</button>
                    </Link>
                </div>
                <form className='form' onSubmit={(e) => { handlerSubmit(e) }}>
                    <div className='input-name'>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name='name' id='name' value={info.name} onChange={handlerChangeInfo} required='required' />
                        {names.includes(info.name) ? (<span>This pokemon already exists🤨🤨!!</span>) : null};
                        {error.name && (<span>{error.name}</span>)};
                    </div>
                    <div className='data_1'>
                        <div>
                            <label htmlFor='hp'>Hp:</label>
                            <input type='range' name='hp' id='hp' min='1' max='255' value={info.hp} onChange={handlerChangeInfo} required='required' />
                            <span>{info.hp}</span>
                            {error.hp && (<span>{error.hp}</span>)};
                        </div>
                        <div> 
                            <label htmlFor='defense'>Defense:</label>
                            <input type='range' name='defense' id='defense' min='1' max='255' value={info.defense} onChange={handlerChangeInfo} required='required' />
                            <span>{info.defense}</span>
                            {error.defense && (<span>{error.defense}</span>)};
                        </div>
                        <div>
                            <label htmlFor='attack'>Attack:</label>
                            <input type='range' name='attack' id='attack' min='1' max='255' value={info.attack} onChange={handlerChangeInfo} required='required' />
                            <span>{info.attack}</span>
                            {error.attack && (<span>{error.attack}</span>)};
                        </div>
                        <div>
                            <label htmlFor='speed'>Speed:</label>
                            <input type='range' name='speed' id='speed' min='1' max='255' value={info.speed} onChange={handlerChangeInfo} required='required' />
                            <span>{info.speed}</span>
                            {error.speed && (<span>{error.speed}</span>)};
                        </div>
                        <div>
                            <label htmlFor='height'>Height:</label>
                            <input type='range' name='height' id='height' min='1' max='1000' value={info.height} onChange={handlerChangeInfo} required='required' />
                            <span>{info.height}</span>
                            {error.height && (<span>{error.height}</span>)};
                        </div>
                        <div>
                            <label htmlFor='weight'>Weight:</label>
                            <input type='range' name='weight' id='weight' min='1' max='1000' value={info.weight} onChange={handlerChangeInfo} required='required' />
                            <span>{info.weight}</span>
                            {error.weight && (<span>{error.weight}</span>)};
                        </div>
                    </div>
                    <div className='input-img'>
                        <label htmlFor="image">Image: </label>
                        <input type="text" name='image' value={info.name} onChange={handlerChangeInfo} />
                        {error.image && (<span>{error.image}</span>)};
                    </div>
                    <div className='data_2'>
                        <span htmlFor='types'>Types:</span>
                        <div className='types'>
                            {types?.map((element) => {
                                return (
                                    <div key={element.name}>
                                        <label htmlFor="types">{element.name}</label>
                                        <input type="checkbox" name={element.name} value={element.name} className={element.name} onChange={handlerCheckBox} />
                                    </div>
                                );
                            })};
                        </div>
                        {info.types.length > 2 || info.types.length === 0 ? (
                            <h3>Max Two Crack😎😎!!</h3>
                        ) : null};
                    </div>
                    <div className='btn-crt'>
                        <button type='submit' disabled={disabled}>CREATE POKEMON!!</button>
                    </div>
                </form>
            </div>
            <Example
                image={info.image}
                id={id}
                name={info.name}
                types={info.types}
                hp={info.hp}
                attack={info.attack}
                defense={info.defense}
                speed={info.speed}
                height={info.height}
                weight={info.weight}
            />
        </div>
    );
};