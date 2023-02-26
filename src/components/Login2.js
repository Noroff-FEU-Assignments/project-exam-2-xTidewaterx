
import { useEffect, useState } from "react"

import RecyclableFetch from "./RecyclableFetch";
import Register from "./utility/Register";

//on home page we are dpendant on localstorage  saved token not to be null, if null we redirect to login page, option register, on register we have the same localstorage saved and redirect


const Login2 = () => {



    const [credentials, setCredentials] = useState(JSON.stringify ({email: null, password: null}));
    const [email, setEmail] = useState("default");
    const [password, setPassword] = useState("");
    const [success, setsuccess] = useState("");
    const [emailState, setEmailState] = useState("none");
    const [passwordState, setPasswordState] = useState("none");
    
    

    
    
    
    //required to change email
    const usernameValue = ( e) => {
    
    
    
    setEmail(e.target.value)
    console.log(email)
    
    }
    
    
    
    
    
    //required to change password
    const passwordValue = ( e) => {
    
    
    
        setPassword(e.target.value)
        console.log(password)
       
        
        }
    
    
    
    //correct info
    const staticEmailValue1 = "JohKje52554@stud.noroff.no";
    const staticPasswordValue1 =  "XN2em7p4DHxXxbe"
    
    
    
    //when email and password changes we set the object to change on each, always updated, it updates on both states needed for objeect
        useEffect(() => {
    
      const saveCredentials = () => {
    
            
                setCredentials(JSON.stringify({ "email": email, "password": password})) 
          
    
    
             
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
    
        if( submitLoginRequest2() === true && password.length > 3) {
    
        console.log("post request") 
    
        ///our endoint security, await we have endpoint property true if the token, if token
    
       //console.log(await RecyclableFetch("/social/auth/login", "POST", credentials))

    
       const postRequest = await RecyclableFetch("/social/auth/login", "POST", credentials)
    
     //  console.log(postRequest.email)
    
       localStorage.setItem("currentUser", postRequest.name)
       localStorage.setItem("currentToken", postRequest.accessToken)
       localStorage.setItem("currentAvatar", postRequest.avatar)
       console.log(postRequest.accessToken)
       console.log(postRequest.accessToken)
       console.log(postRequest.accessToken)
    
    
    
    
    
    
      if (postRequest.accessToken) {

        localStorage.setItem("currentUser", postRequest.name)
    
 //   console.log("Successfull request, accessToken granted")
    
    //console.log(postRequest.accessToken)

    const parseValue = JSON.parse(credentials) 


//we can add position absolute to overwrite entire page and have this take over, size 100%
setsuccess(<h3>"Logged in successfully, you are being redirected"</h3>)
    

const awaitRedirect = function () {

    
    setTimeout( function () {

        window.location.href= "/";

    }, 2000) 


}

awaitRedirect()

    
    
    //here on, successfull postrequest.accesstoken, now we setItem in localstorage, setnmae for specific organism page, reach when login, immediately have data endpoint confirmed vlaue saved on computer, data valuees float, now reach with valid response, 200 means sucesss we have returned data value
    
    
      }
    
    
        //localStorage.setItem("currentUser", jsonCredentials.email)          ---this must fire on each successfult 200 code endpoint request login confirmed true
    
      
        
            
        } else { //this means test is wrong and password is short, email problem and password too short
    
            console.log(submitLoginRequest2())

            if(submitLoginRequest2() == false) {
                setEmailState("block")
            }

   if(password.length < 3) {


    setPasswordState("block")
   }

            setsuccess(

            

            <div>
            <p className="general"  >Login input is wrong</p>
            
       
            </div>
            )

            //here check the inputs, display error messages accrodingly 
    
    
        }
    
    
    
    
        
    }
    
    
    
    

    





    return     <div className="login-form vh-100 d-flex justify-content-center align-items-center d-flex ">
  <div class="bg-light  p-5 shadow-sm border rounded-3 p-5 d-flexbox">
  <h2 class="text-center mb-4 b-3 pb-3 login-heading">Login</h2>
    
    <form>

<div className="pt-3">
    <input placeholder="email"
    onChange={usernameValue}
    >
    </input>
    <p className="email-error" style={{display: emailState}} >Invalid Email</p>
       
    </div>

    <div className="pt-3 pb-3">
    <input placeholder="password"
    onChange={passwordValue}
    > 
    

    
    </input>

    <p className="general" style={{display: passwordState}}  >Minimum 4 characters</p> 
    </div>
    <input className="mb-3 submit-button-login" type="button" value="Submit" onClick={submitLoginRequest}></input>
    
    </form>
    
    
    <a href="/Register" style={{color: "black"}}>Not a registered user? Register here</a>
    
{success}
    
    
    </div>

    </div>
    
    }
    
    
    export default Login2