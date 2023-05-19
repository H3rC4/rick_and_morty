//!-------components-------
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar';
import Forms from './components/Forms/Forms.jsx'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
//!----stiles----
import style from './App.module.css' 
//!-----------imports-----------------------------
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Favorites from './components/Favorites/Favorites.jsx'
//! CREDENCIALES FAKE!!
 const username = 'hernan@gmail.com';
 const password = 'her1234';

function App() {
   //hOOKS!
   const [characters, setCharacters] = useState([]);
   const {pathname} = useLocation();
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   useEffect(() => {
      !access && navigate("/");
    }, [access, navigate]);


   const login = (userData)=>{
      if(userData.username===username && userData.password===password){
         setAccess(true);
         navigate("/home");
      }else{
         alert ('Credenciales incorrectas');
      }
   };

   function onSearch(id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };
   const onClose=(id)=>{
      setCharacters(
      characters.filter((elem)=>{
         return elem.id !== Number(id)
      })
      )
   };
   //saca la ubicacion de la barra del navegador
   //location es un objeto por eso desestructura pathname
   return (
      <div className={style.App}>
         {/* condicional para no mostrar nav en el login */}
         {pathname !== '/' && <NavBar onSearch = {onSearch} />}
         <Routes>
            <Route path='/' element={<Forms login ={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail character = {characters.id}/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
         
        
      </div>
   );
}

export default App;
