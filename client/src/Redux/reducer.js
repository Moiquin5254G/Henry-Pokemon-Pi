import {
    GETALLPOKEMONS,
    GETALLTYPES,
    GETPOKEMONBYNAME,
    GETPOKEMONDETAIL,
    CREATEPOKEMON,
    DELETEPOKEMON,
    FILTERPOKEMONSBYTYPE,
    FILTERPOKEMONSBYCREATED,
    ORDERBYNAME,
    ORDERBYATTACK,
    ORDERBYDEFENSE,
    SETLOADERTRUE,
    SETDETAIL
} from './actions-types';

const intialState = {
    allPokemons: [],
    pokemons: [],
    change: [],
    types: [],
    detail: [],
    loader: true
};

export const rootReducer = (state = intialState, action) => {
    switch (action.type) {

        case GETALLPOKEMONS:
            return {
                ...state,
                allPokemons: [...action.payload], //distitas copias para trabajar
                pokemons: [...action.payload],
                change: [...action.payload],
                loader: false,
            };

        case GETALLTYPES:
            return {
                ...state,
                types: action.payload
            };

        case FILTERPOKEMONSBYTYPE:
            const pokemonsByType = state.pokemons;
            const filteredTypes = action.payload === 'All' ?
                pokemonsByType : pokemonsByType.filter((pokemon) => pokemon.types?.map((type) => type.name).includes(action.payload));
            return {
                ...state,
                allPokemons: filteredTypes,
                change: [...filteredTypes]
            };

        case FILTERPOKEMONSBYCREATED:
            const pokemonsByCreate = state.pokemons;
            let filterByCreated = action.payload === 'Db' ?
                pokemonsByCreate.filter((element) => element.createInDb === true) :
                pokemonsByCreate.filter((element) => element.createInDb === false);

            if (action.payload === 'All') filterByCreated = pokemonsByCreate;
            return {
                ...state,
                allPokemons: filterByCreated
            };

        case ORDERBYNAME:
            let nameSort;
            if (action.payload === 'ASC') {
                nameSort = state.allPokemons.sort((a, b) => {
                    if (a.name > b.name) return 1;
                    if (a.name < b.name) return -1;
                    return 0;
                })
            } else if (action.payload === 'DSC') {
                nameSort = state.allPokemons.sort((a, b) => {
                    if (a.name < b.name) return 1;
                    if (a.name > b.name) return -1;
                    return 0;
                })
            } else {
                nameSort = state.change.slice()
            }
            return {
                ...state,
                allPokemons: nameSort
            }

        case ORDERBYATTACK:
            let attackSort;
            if (action.payload === '+ATK') {
                attackSort = state.allPokemons.sort((a, b) => {
                    if (a.attack < b.attack) return 1;
                    if (a.attack > b.attack) return -1;
                    return 0;
                })
            } else if (action.payload === '-ATK') {
                attackSort = state.allPokemons.sort((a, b) => {
                    if (a.attack > b.attack) return 1;
                    if (a.attack < b.attack) return -1;
                    return 0;
                })
            } else {
                attackSort = state.change.slice();
            }
            return {
                ...state,
                allPokemons: attackSort
            }

        case ORDERBYDEFENSE:
            let defenseSort;
            if (action.payload === '+DEF') {
                defenseSort = state.allPokemons.sort((a, b) => {
                    if (a.defense < b.defense) return 1;
                    if (a.defense > b.defense) return -1;
                    return 0;
                })
            } else if (action.payload === '-DEF') {
                defenseSort = state.allPokemons.sort((a, b) => {
                    if (a.defense > b.defense) return 1;
                    if (a.defense < b.defense) return -1;
                    return 0;
                })
            } else {
                defenseSort = state.change.slice();
            }
            return {
                ...state,
                allPokemons: defenseSort
            }

        case GETPOKEMONBYNAME:
            if (!action.payload) alert();
            return {
                ...state,
                allPokemons: [action.payload]
            }

        case CREATEPOKEMON:
            return {
                ...state
            }

        case GETPOKEMONDETAIL:
            return {
                ...state,
                detail: action.payload
            }

        case SETLOADERTRUE:
            return {
                ...state,
                loader: true
            }

        case DELETEPOKEMON:
            return {
                ...state,
            }

        case SETDETAIL:
            return {
                ...state,
                details: []
            }

        default:
            return { ...state };
    }
}