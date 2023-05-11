import style from "./Forms.module.css";
import { useState } from "react";
import validation from "./validation";

const Forms = ({login}) => {

const [userData, setUserData] = useState({
    username:"",
    password:"",
})
//seteo de errores
const [errors, setErrors] = useState({
  username:"",
  password:"",
});

const handlerInputChange =(event)=>{
  const property = event.target.name
  const value = event.target.value

setUserData({...userData, [property]:value});
validation({...userData, [property]:value},errors, setErrors);
};
const submitHandler = (event)=>{
 event.preventDefault();
  login(userData);
}
  return (
    <form className={style.forms} onSubmit={submitHandler}>
     
      <div>
        {""}
        <label htmlFor="username">Username:</label>
      </div>
      <div>
        {" "}
        <input type="text" onChange={handlerInputChange} name="username" value={userData.username}/>
      <p>{errors.username}</p>
      </div>

      <div>
      </div>
        <label htmlFor="password">Password:</label>{" "}
      <div>
        {" "}
        <input type="text" name="password" onChange={handlerInputChange}  value={userData.password}/>
      </div>

      <button>LOGIN</button>
    </form>
  );
};
export default Forms;
