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
            const response = await axios.get('https://henry-pokemon-pi-production.up.railway.app/pokemons');
            const data = response.data;
            console.log(data);

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
            const response = await axios.get('https://henry-pokemon-pi-production.up.railway.app/types');
            const data = response.data;
            console.log(data);

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
export const getPokemonByName = (searchName) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://henry-pokemon-pi-production.up.railway.app/pokemons/?name=${searchName}`);
            const data = response.data;
            // console.log(data);

            return dispatch({
                type: GETPOKEMONBYNAME,
                payload: data
            });
        } catch (error) {
            // alert(`This pokemon with name ${searchName} not exists`);
            // return dispatch({
            //     type: GETPOKEMONBYNAME,
            //     payload: []
            // });
            return error
        }
    }
}

//------------------------------------------------------------------------------------------------------//
export const getPokemonDetail = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://henry-pokemon-pi-production.up.railway.app/pokemons/${id}`);
            const data = response.data;
            // console.log([data]);

            return dispatch({
                type: GETPOKEMONDETAIL,
                payload: [data]
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
            const response = await axios.post('https://henry-pokemon-pi-production.up.railway.app/pokemons', payload);
            const data = response.data;

            return dispatch({
                type: CREATEPOKEMON,
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

//------------------------------------------------------------------------------------------------------//
export const deletePokemon = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`https://henry-pokemon-pi-production.up.railway.app/pokemons/${id}`)
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
export const typeFilter = (types) => {
    return {
        type: FILTERPOKEMONSBYTYPE,
        payload: types
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