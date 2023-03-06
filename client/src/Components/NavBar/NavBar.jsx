import './NavBar.css';
import React, { useState } from "react";


export const NavBar = ({
    prevent,
    allTypes,
    handlerOrderByAttack,
    handlerOrderByDefense,
    handlerOrderByName,
    handlerFilterByCreated,
    handlerFilterByType
}) => {
    const [active, setActive] = useState(false);

    return (
        <React.Fragment>
            <div>
                <div className='container-filter containerNav'>
                    <div className='icon-filter' onClick={() => setActive(!active)} >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='icon'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75'
                            />
                        </svg>
                        <span>Filters</span>
                    </div>
                    <button onChange={(e) => { prevent(e) }}>Reset</button>
                </div>

                <div className={`container-filters ${active ? 'active' : ''} `} >
                    <div className='filter-by-type'>
                        <span>Types</span>
                        <select onChange={(e) => handlerFilterByType(e)}>
                            <option value='all'>All Types</option>
                            {
                                allTypes?.map((type) => (<option key={type.name} value={type.name} >{type.name}</option>))
                            }
                        </select>

                        <span>Order By Attack</span>
                        <select onChange={handlerOrderByAttack}>
                            <option value="inorder">No Attack Order</option>
                            <option value="+atk">ATK+</option>
                            <option value="-atk"> -ATK</option>
                        </select>

                        <span>Order By Defense</span>
                        <select onChange={handlerOrderByDefense}>
                            <option value="inorder">No Defense Order</option>
                            <option value="+def">DEF+</option>
                            <option value="-def"> -DEF</option>
                        </select>

                        <span>Alphabetical Order</span>
                        <select onChange={handlerOrderByName}>
                            <option value="inorder">No Alphabetical Order</option>
                            <option value="asc">A-Z</option>
                            <option value="dsc">Z-A</option>
                        </select>

                        <span>Bring From</span>
                        <select onChange={handlerFilterByCreated}>
                            <option value="all">ALL</option>
                            <option value="API">API</option>
                            <option value="DB">CREATED</option>
                        </select>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};