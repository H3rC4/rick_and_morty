import style from "./Forms.module.css";
import { useState } from "react";
import validation from "./validation";

const Forms = ({login}) => {

const [userData, setUserData] = useState({
    username:"",
    password:"",
})
//seteo de errores
const [errors, setErrors] = useState({});

const handlerInputChange =(event)=>{
  const property = event.target.name
  const value = event.target.value

setUserData({
  ...userData,
  [property]:value
});
setErrors(validation({
  ...userData,
  [property]:value
}));
};




const submitHandler = (event)=>{
 event.preventDefault();
  login(userData);
}
  return (
    <form className={style.forms}>
      <div>
      
        <label htmlFor="username">Username:</label>
      </div>
      <div>
        <input type="text" onChange={handlerInputChange} name="username" value={userData.username}/>
        {errors.e1 ? (<p>{errors.e1}</p>)
        : errors.e2 ? (<p>{errors.e2}</p>) 
        : (<p>{errors.e3}</p>)
        }
      </div>
      <div>
      </div>
        <label htmlFor="password">Password:</label>
      <div>
        <input type="text" name="password" onChange={handlerInputChange}  value={userData.password}/>
        {errors.p1? (<p>{errors.p1}</p>):<p>{errors.p2}</p>}
      </div>
      <button  onClick={submitHandler} type="submit">LOGIN</button>
    </form>
  );
};
export default Forms;
