import './HomePage.css';
import { Card } from '../Card/Card';
import { Loader } from '../Loader/Loader';
import { NavBar } from '../NavBar/NavBar';
import { SearchBar } from '../SearchBar/SearchBar';
import { Paginated } from '../Paginated/Paginated';
import { useDispatch, useSelector } from 'react-redux';
import React, { Fragment, useState, useEffect } from 'react';
import { filterByCreated, getAllPokemons, getAllTypes, orderByAttack, orderByDefense, orderByName, setLoader, typeFilter } from '../../Redux/actions';



export const HomePage = () => {
    const allPokemons = useSelector((state) => state.allPokemons);
    const allTypes = useSelector((state) => state.types);
    const loading = useSelector((state) => state.loader);
    const [order, setOrder] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPokemons());
        dispatch(getAllTypes());
        return (() => {
            dispatch(setLoader());
        });
    }, [dispatch]);

    const [pokemonsInPage, setPokemonsPerPage] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);
    const lastPokemon = currentPage * pokemonsInPage;
    console.log(lastPokemon);
    const firtsPokemon = lastPokemon - pokemonsInPage;
    console.log(firtsPokemon);
    const renderPokemons = allPokemons.slice(firtsPokemon, lastPokemon);
    console.log(renderPokemons);
    const Page = (pageNumber) => { setCurrentPage(pageNumber) };

    console.log(order, setPokemonsPerPage);

    //MANEJADORES DE EVENTOS:

    const prevent = (e) => {
        e.preventDefault();
        dispatch(getAllPokemons());
        dispatch(getAllTypes());
    };

    const handlerFilterByType = (e) => {
        e.preventDefault();
        dispatch(typeFilter(e.target.value));
        setCurrentPage(1);
    };

    const handlerFilterByCreated = (e) => {
        e.preventDefault();
        dispatch(filterByCreated(e.target.value));
        setCurrentPage(1);
    };

    const handlerOrderByName = (e) => {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setOrder(e.target.value);
        setCurrentPage(1);
    };

    const handlerOrderByAttack = (e) => {
        e.preventDefault();
        dispatch(orderByAttack(e.target.value));
        setOrder(e.target.value);
        setCurrentPage(1);
    };

    const handlerOrderByDefense = (e) => {
        e.preventDefault();
        dispatch(orderByDefense(e.target.value));
        setOrder(e.target.value);
        setCurrentPage(1);
    };

    const setPage = (e) => {
        setCurrentPage(1);
    };

    return (
        <>
            {loading ? (<Loader />) :
                <div>
                    <SearchBar setPage={setPage} />

                    <NavBar
                        prevent={prevent}
                        handlerOrderByAttack={handlerOrderByAttack}
                        handlerOrderByDefense={handlerOrderByDefense}
                        handlerOrderByName={handlerOrderByName}
                        handlerFilterByCreated={handlerFilterByCreated}
                        handlerFilterByType={handlerFilterByType}
                        allTypes={allTypes}
                    />

                    <Paginated
                        pokemonsInPage={pokemonsInPage}
                        allPokemons={allPokemons.length}
                        currentPage={Page}
                        page={currentPage}
                    />
                    <div className='container'>
                        <div className='card-list-pokemon'>
                            {renderPokemons?.map((el) => {
                                return (
                                    <Fragment key={el.id}>
                                        <Card key={el.id} image={el.image} name={el.name} id={el.id} type={el.types} />
                                    </Fragment>
                                )
                            })}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}