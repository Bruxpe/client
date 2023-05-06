import {GET_ALL_POKEMONS,UPDATE_SELECT_FILTRO,GET_DETAIL_POKEMONS,CLEAN_POKEMONS_DETAILS,GET_TYPES,GET_DB_POKEMONS} from "./actions-types";
const initialState = {
    pokemones: [],
    pokemonsDetail: null,
    types: [],
    selectFiltro: "all",

  
}

const reducer = (state = initialState, action) => {
    switch(action.type) {

        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemones: action.payload
            }

        case UPDATE_SELECT_FILTRO:
            return{
                ...state,
                selectFiltro: action.payload,
            }
        case GET_TYPES:
            return{
                ...state,
                types: action.payload,
            }
                       
        default:
            return {
                ...state
            }
    }
}

export default reducer;