import { useEffect, useState } from "react"
import { json } from "react-router-dom";
import RecyclableFetch from "./RecyclableFetch";
import { baseUrl } from "./utility/Variables"






const Login = () => {



const [credentials, setCredentials] = useState(JSON.stringify ({email: null, password: null}));
const [email, setEmail] = useState("default");
const [password, setPassword] = useState("default");




const usernameValue = ( e) => {



setEmail(e.target.value)
console.log(email)

}






const passwordValue = ( e) => {



    setPassword(e.target.value)
    console.log(password)
   
    
    }



//correct info
const staticEmailValue1 = "JohKje52554@stud.noroff.no";
const staticPasswordValue1 =  "XN2em7p4DHxXxbe"




    useEffect(() => {

  const saveCredentials = () => {

        
            setCredentials(JSON.stringify({ "email": email, "password": password})) 
            console.log(credentials)


         
      }
        
        saveCredentials()
        
    }, [email, password])



    //const jsonData = await RecyclableFetch("/social/posts", "GET");



    const submitLoginRequest2 = ( ) => {



        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
        console.log( regex.test(email))
    
    
        return regex.test(email)
    
    
     }
    




const submitLoginRequest = async() => {
    const jsonCredentials = JSON.parse(credentials);



  
  
const token2 =" toke value is present"
const token = null; 
//have this be verification of email value and password value, email regex

    if( submitLoginRequest2() == true && password.length > 3) {

    console.log("post request") 

    ///our endoint security, await we have endpoint property true if the token, if token

   console.log(await RecyclableFetch("/social/auth/login", "POST", credentials))

   const postRequest = await RecyclableFetch("/social/auth/login", "POST", credentials)

   console.log(postRequest.email)

   localStorage.setItem("name", postRequest.name)




  if (postRequest.accessToken) {

console.log("Successfull request, accessToken granted")

console.log(postRequest.accessToken)


//here on, successfull postrequest.accesstoken, now we setItem in localstorage, setnmae for specific organism page, reach when login, immediately have data endpoint confirmed vlaue saved on computer, data valuees float, now reach with valid response, 200 means sucesss we have returned data value


  }


    //localStorage.setItem("currentUser", jsonCredentials.email)          ---this must fire on each successfult 200 code endpoint request login confirmed true

  
    
        
    } else {

        console.log(submitLoginRequest2())
        console.log("input value is required")
    }




    
}




const parseValue = JSON.parse(credentials) 


return <div>

<form>
<input placeholder="email"
onChange={usernameValue}
>
</input>

<input placeholder="password"
onChange={passwordValue}
> 




</input>
<p>Minimum 4 letters</p>

<input type="button" value="Submit" onClick={submitLoginRequest}></input>

</form>






<div>  {parseValue.email} </div>


</div>



}


export default Login