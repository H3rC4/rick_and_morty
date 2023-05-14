const validation = (userData)=>{
    let  errors = {};

    if(!userData.username.includes('@')){
        errors.e1 = 'username is not valid';
    }
    if(!userData.username){
        errors.e2 = 'Ingrese username'
    }
    if(userData.username.length > 35){
        errors.e3 = 'Menos de 35 caracteres'
    }
    if(!/\d/.test(userData.password)){
        errors.p1 = 'Al menos debe tener un numero'
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.p2 = 'Longitud incorrecta'
    }
    return errors


    //     if(!userData.username){
//         setErrors({...errors, username: "por favor completa este campo"});
//     }
//    else if(userData.username.length>35){
//         setErrors({...errors, username: "Has superado los 35 caracteres"});
//     }
//     else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)){
//         setErrors({...errors, username:"username invalido"});
//     }else{
//         setErrors({...errors, username:""});
        
//     }
//     if(userData.password.length<6 || userData.password.length>10){//validacion de mayusculas minuscula y de 6 a 10 caracteres
        
//         setErrors({...errors, password:"La password debe ser de entre 6 y 10 caracteres"});
//     }
//     else if(!/\d/.test(userData.password)){
//         setErrors({...errors, password:"Debe contener almenos un numero"});
//     }
//     else {
//         setErrors({...errors, password:""})
//     }

};
export default validation;