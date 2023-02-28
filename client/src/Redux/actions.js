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
import axios from 'axios';

export const getAllPokemons = () => {
    return async (dispatch) => {
        try {
            const response = await axios('http://localhost:3001/pokemons');
            const data = response.data;

            return dispatch({
                type: GETALLPOKEMONS,
                payload: data
            });
        } catch (error) {
            return error;
        }
    };
};

//------------------------------------------------------------------------------------------------------//
export const getAllTypes = () => {
    return async (dispatch) => {
        try {
            const response = await axios('http://localhost:3001/types');
            const data = response.data;

            return dispatch({
                type: GETALLTYPES,
                payload: data
            })
        } catch (error) {
            return error;
        }
    }
}

//------------------------------------------------------------------------------------------------------//
export const getPokemonByName = (name) => {
    return async (dispatch) => {
        try {
            const response = await axios(`http://localhost:3001/pokemons/?name=${name}`);
            const data = response.data;

            return dispatch({
                type: GETPOKEMONBYNAME,
                payload: data
            })
        } catch (error) {
            return error;
        }
    }
}

//------------------------------------------------------------------------------------------------------//
export const getPokemonDetail = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios(`http://localhost:3001/pokemons/${id}`);
            console.log(response);
            const data = response.data;

            return dispatch({
                type: GETPOKEMONDETAIL,
                payload: data
            })
        } catch (error) {
            return error;
        }
    }
}

//------------------------------------------------------------------------------------------------------//
export const postPokemon = (payload) => {
    return async (dispatch) => {
        try {
            const response = await axios('http://localhost3001/pokemons', payload);
            const data = response.data;

            return dispatch({
                type: CREATEPOKEMON,
                payload: data
            })
        } catch (error) {
            return error;
        }
    }
}

//------------------------------------------------------------------------------------------------------//
export const deletePokemon = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`http://localhost3001/pokemons/${id}`)
            const data = response.data;

            return dispatch({
                type: DELETEPOKEMON,
                payload: data
            })
        } catch (error) {
            return error;
        }
    }
}

//------------------------------------------------------------------------------------------------------//
export const typeFilter = (payload) => {
    return {
        type: FILTERPOKEMONSBYTYPE,
        payload
    }
}

//------------------------------------------------------------------------------------------------------//
export const filterByCreated = (payload) => {
    return {
        type: FILTERPOKEMONSBYCREATED,
        payload
    }
}

//------------------------------------------------------------------------------------------------------//
export const orderByName = (payload) => {
    return {
        type: ORDERBYNAME,
        payload
    }
}

//------------------------------------------------------------------------------------------------------//
export const orderByAttack = (payload) => {
    return {
        type: ORDERBYATTACK,
        payload
    }
}

//------------------------------------------------------------------------------------------------------//
export const orderByDefense = (payload) => {
    return {
        type: ORDERBYDEFENSE,
        payload
    }
}
    
//------------------------------------------------------------------------------------------------------//
export const setLoader = () => {
    return {
        type: SETLOADERTRUE
    }
}

//------------------------------------------------------------------------------------------------------//
export const setDetail = () => {
    return {
        type: SETDETAIL
    }
}