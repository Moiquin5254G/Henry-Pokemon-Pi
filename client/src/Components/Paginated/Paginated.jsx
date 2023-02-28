import './Paginated.css';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';


export const Paginated = ({ pokemonsInPage, allPokemons, currentPage, page }) => {
    const numPages = [];

    for (let i = 1; i <= Math.ceil(allPokemons / pokemonsInPage); i++) {
        numPages.push(i);
    };

    return (
        <div className='container-pag'>
            <div className='children'>
                <button className="btnNav" style={page <= 1 ? { display: 'none' } : {}} onClick={() => currentPage(page - 1)}><FontAwesomeIcon icon={faChevronLeft} /></button>
                {numPages && numPages.map((num) => {
                    return <button className="page" key={num} onClick={() => currentPage(num)} >{num}</button>
                })};
                <button className="btnNav" style={page >= numPages.length ? { display: "none" } : {}} onClick={() => currentPage(page + 1)} ><FontAwesomeIcon icon={faChevronRight} /></button>
            </div>
            <p>Page {page} of {numPages.length}</p>
        </div>
    );
};