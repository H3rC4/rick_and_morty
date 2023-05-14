import style from "./Card.module.css";
import {Link} from 'react-router-dom';
import {addFav, removeFav} from "../../redux/actions";
import {connect} from 'react-redux';
import { useState, useEffect } from "react";

const Card = ({id, name, species, gender, image, onClose, removeFav, addFav, myFavorites}) => {
  
  const [isFav,setIsFav] = useState(false);

  const  handleFavorite =()=>{
    if(isFav){
      setIsFav(false);
      removeFav(id);//aca recibe el id y se lo pasa a mapDispatchToProps
    }else{
      setIsFav(true);
      addFav({id, name, species, image, gender})
      //aca paso el objeto desestructurado a la linea 42
    }
  }
  useEffect(() => {
     myFavorites.forEach((fav) => {
        if (fav.id === id) {
           setIsFav(true);
        }
     });
  }, [myFavorites]);
  
  return (
         <div className={style.card}>
      <Link to={`/detail/${id}`}><div className={style.imgBx}> <img  src={image} alt="" /></div></Link>
      <div className={style.content}>
        <div className={style.details}>
          
         <button onClick={handleFavorite}>{isFav? '❤️' : '🤍'}</button>
          <h2>{name}</h2>
          <h2>{species}</h2>
          <h2>{gender}</h2>
         
          <div className={style.button}>
        <button  onClick={() => {onClose(id);}}>Close</button>
        </div>
        
        </div>
      </div>
      
    </div>
  );
};


const mapStateToProps = (state) =>{
  //el state lo recibe por que si
  // siempre retorna un objeto
  return{
    myFavorites: state.myFavorites
  }
}


const mapDispatchToProps= (dispatch)=> {
//esta funcion conecta a card con las funciones y las exporta
  return {
    addFav: (character)=> {dispatch(addFav(character))},
    //recibe el objeto estructurado(ponele) y lo llama character
    //q se lo manda a actions.js
    removeFav: (id)=> {dispatch(removeFav(id))} //este dispatch lo manda a actions
    //aca la prop recibe el id y se lo pasa a dispach para q ejecute la funcion
  }
} 
// estas funciones van a reducer tiene q retornar un objeto por q 
//redurcer trabaja con objetos


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
