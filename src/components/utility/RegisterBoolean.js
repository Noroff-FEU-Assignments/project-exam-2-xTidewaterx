


const RegisterBoolean = (name, email, password, ) => {




    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
let emailValue = regex.test(email);


console.log("emailValue is: " + emailValue)
















if(name.length >0 & emailValue == true  & password.length > 4) {

    return true


} else {
    
    return false

}




}

export default RegisterBoolean