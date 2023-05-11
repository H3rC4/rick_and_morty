import { REMOVE_FAV, ADD_FAV,FILTER,ORDER } from './actionTypes'


const initialState = {
    myFavorites:[], 
    allCharacters:[]
}
const reducer=(state = initialState, action)=>{//acction se puede desestructurar

    switch(action.type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites:[...state.myFavorites,action.payload]
            }
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites: state.myFavorites.filter(fav=>fav.id !== Number(action.payload))
            }
        default:
            return {...state}
    }

}
export default reducer;