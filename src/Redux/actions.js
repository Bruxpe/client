import {GET_ALL_POKEMONS,GET_TYPES, DELETE_POKE} from "./actions-types";
import axios from "axios";

export const deletePokeBd = async(id)=>{
    try {
        const response = await axios.delete(`http://localhost:3001/pokemons/deletepoke/${id}`)
        return(response)
    } catch (error) {
        
        return(error.message)
    }
}

export const getAllPokemos = () => {
    return function(dispatch) {
        fetch("http://localhost:3001/pokemons")
        .then(result => result.json())
        .then(data => {
            
            return dispatch({type: GET_ALL_POKEMONS, payload: data}); // lo despachas --> con un type
        })
    }
}

export const getAllTypes =()=>{
    return function(dispatch) {
        fetch("http://localhost:3001/pokemons/tipos")
        .then(result => result.json())
        .then(data => {
            const allTypes = ["All", ...data]; 
            return dispatch({type: GET_TYPES, payload: allTypes}); // lo despachas --> con un type
        })
    }

}

    export const postPokeArray = async (postArray)=>{
        const data = {
            name: postArray.name,
            img: postArray.img,
            hp: postArray.hp,
            attack: postArray.attack,
            defense: postArray.defense,
            speed: postArray.speed,
            types: postArray.types
          };
        try {
            const response = await axios.post("http://localhost:3001/pokemons",data);
            return (response)
        } catch (error) {
            return (error);
        }


    }       


