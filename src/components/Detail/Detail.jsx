import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from './Detail.module.css'
import { Link } from 'react-router-dom';
const Detail = ()=>{
   const {id} = useParams();
   const [character, setCharacter] = useState({});
   useEffect(() => {
      axios(`http://localhost:3001/rickandmorty/character/${id-1}`).then(({ data }) => {
         if (data.name) {
            setCharacter(data);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
      return setCharacter({});
   }, [id]);


      
 return(
   <div className={style.conteiner}>
      <div className={style.imgcontenedor}><img src={character.image && character.image} alt="" /></div>
   <div className={style.info}>
   <h1>Name: "{character.name && character.name}"</h1>
   <h1>Status: "{character.status && character.status}"</h1>
   <h1>Species: "{character.species && character.species}"</h1>
   <h1>Gender: "{character.gender && character.gender}"</h1>
   <h1>Origins: "{character.origin?.name && character.origin?.name}"</h1>
   <Link to='/home'>
       <button>Home</button>
   </Link>
</div>
</div>
 ) 


};
export default Detail;