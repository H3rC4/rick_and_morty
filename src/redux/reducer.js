import { REMOVE_FAV, ADD_FAV, FILTER, ORDER } from './actionTypes'


const initialState = {// es un objeto con  2 propiedades
    myFavorites:[], 
    //seteo un nuevo initialState
    allCharacters:[]
}
const reducer=(state = initialState, action)=>{//renombra 'initialState' a 'state'

    switch(action.type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites:[...state.allCharacters,action.payload],
                allCharacters:[...state.allCharacters,action.payload]
            }
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites: state.myFavorites.filter(fav=>fav.id !== Number(action.payload))
            }
        case FILTER:
            const allCharactersFiltered = state.allCharacters.filter((char)=>char.gender === action.payload);
            return{
                myFavorites: allCharactersFiltered
            }
        case ORDER:
            return{
                ...state,
                myFavorites: state.allCharacters.filter((char)=>char.gender !== action.payload)
            }
        default:
            return {...state}
    }

}
export default reducer;