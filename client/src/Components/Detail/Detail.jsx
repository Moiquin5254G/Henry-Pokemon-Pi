import './Detail.css';
import React from 'react';
import { useEffect } from 'react';
import { Message } from '../Message/Message';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Num, Weight, Percentage } from './Controller';
import { deletePokemon, getPokemonDetail, setDetail } from '../../Redux/actions';


export const Detail = (props) => {
    const id = props.match.params.id;
    console.log(id);
    const history = useHistory();
    const dispatch = useDispatch();
    const Details = useSelector(state => state.detail);

    const deleteButton = (e) => {
        e.preventDefault();
        dispatch(deletePokemon(id));
        alert('Removed Pokemon😉😉!!');
        setTimeout(() => {
            history.push('/pokemons')
        }, 500);
    };

    useEffect(() => {
        dispatch(getPokemonDetail(id));
    }, [dispatch, id]);

    useEffect(() => {
        return () => {
            dispatch(setDetail());
        };
    }, [dispatch]);

    return (
        <>
            {Details.length ? (
                <div className=''>
                    {Details.name !== 'SequelizeDatabaseError' ? (
                        <div className='container'>
                            <div className='header-main-pokemon'>
                                <span className='number-pokemon'># {Details[0].id}</span>
                                <div className='container-img-pokemon'>
                                    <img src={Details[0].image} alt={`Pokemon ${Details[0].name}`} />
                                </div>
                                <div className='container-info-pokemon'>
                                    <h1>{Details[0].name}</h1>
                                    <div className='card-types info-pokemon-type'>
                                        {Details[0].types?.map((element) => (<span key={element.name} className={element.name}>{element.name}</span>))}
                                    </div>
                                    <div className='info-pokemon'>
                                        <div className='group-info'>
                                            <p>Height</p>
                                            <span>{Num(Details[0].height)} M</span>
                                        </div>
                                        <div className='group-info'>
                                            <p>Weight</p>
                                            <span>{Weight(Details[0].weight)} KG</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='container-stats'>
                                <h1>Stats</h1>
                                <div className='stats'>
                                    <div className='stat-group'>
                                        <span>Hp</span>
                                        <div className='progress-bar'>
                                            <div className='progress' style={{ width: Percentage(Details.hp) }} />
                                        </div>
                                        <span className='counter-stat'>{Details[0].hp}</span>
                                    </div>
                                    <div className='stat-group'>
                                        <span>Attack</span>
                                        <div className='progress-bar'>
                                            <div className='progress' style={{ width: Percentage(Details.attack) }} />
                                        </div>
                                        <span className='counter-stat'>{Details[0].attack}</span>
                                    </div>
                                    <div className='stat-group'>
                                        <span>Defense</span>
                                        <div className='progress-bar'>
                                            <div className='progress' style={{ width: Percentage(Details.defense) }} />
                                        </div>
                                        <span className='counter-stat'>{Details[0].defense}</span>
                                    </div>
                                    <div className='stat-group'>
                                        <span>Speed</span>
                                        <div className='progress-bar'>
                                            <div className='progress' style={{ width: Percentage(Details.speed) }} />
                                        </div>
                                        <span className='counter-stat'>{Details[0].speed}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='btns'>
                                <Link to={'/pokemons'}>
                                    <button>⬅Back</button>
                                </Link>
                                <button onClick={(e) => deleteButton(e)}>Delete</button>
                            </div>
                        </div>
                    ) : <Message />};
                </div>
            ) : null}
        </>
    );
};