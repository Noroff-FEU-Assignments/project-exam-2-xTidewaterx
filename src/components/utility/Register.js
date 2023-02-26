//to register profile this is needed:: post request, recyclablefetch with correct body and then redirect, we save value localstorage dependent for auth organism correct return endpoint

import { useEffect, useState } from "react"
import RecyclableFetch2 from "../RecyclableFetch2"
import RegisterBoolean from "./RegisterBoolean"


//current have all consuming state profilecredentials to become all of them in an object, all onchange values

///wthen all ocnhange input values become melted, we have requewest, json stringify 

///usestate json stringify, we create a post request with body object we have endpoint, all string value object placed and red by expecting data values melt




//all values component return, and on event this compoment  gives registered and returns valeu for us to confirm storafge, 
//then valuable storage is ready and all is clear, green response when object endpoint





//create component that takes all values as props and if all correct component returns true


const Register = ()  => {


    const [name, changeName] = useState("")
    const [email, changeEmail] = useState("")
    
    const [password, changePassword] = useState("hhhhhhhhhhhhhh")
    
    const [avatar, changeAvatar] = useState("")
    
    const [banner, changeBanner] = useState("")

    const [profileCredentials, setProfileCredentials] = useState(null);
//have the return happen on event click
//by default there should only be register and then a bunch of inputs
  const [errorMessage, setErrorMessage] = useState("")
//we must change profileCredent

//onclick we check if registerboolan is true, iff true, send request to server
//under each input have a value that becomes cleared when meet criteria, a value that turns into something when thing is met


//have htese as function with one parameter, being what state they change and in input you have parameter filled with true link name array values sort iterate map splice element index array value properties data values

const changeNameValue = (e) => {


    const currentValue = e.currentTarget.value;

    changeName(currentValue)

    console.log(name)
}




const changeEmailValue = (e) => {


    const currentValue = e.currentTarget.value;

    changeEmail(currentValue)

    console.log(name)
}





const changePasswordValue = (e) => {


    const currentValue = e.currentTarget.value;

    changePassword(currentValue)

    console.log(name)
}





const changeAvatarValue = (e) => {


    const currentValue = e.currentTarget.value;

    changeAvatar(currentValue)

    console.log(name)
}






const changeBannerValue = (e) => {


    const currentValue = e.currentTarget.value;

    changeBanner(currentValue)

    console.log(name)
}






const logRequestObject = () => {

//error 400, profile already exists, we have states in object and if registerBoolean returns true then we fetch reqeust with state in object


    console.log(JSON.parse(profileCredentials))

const requestBody = profileCredentials;


 if(RegisterBoolean(name, email, password) == true) { 

    RecyclableFetch2("/social/auth/register", "POST", requestBody)
 } else {

    console.log("values are wrong")
    setErrorMessage("error, wrong values, try again" )
 }
}





useEffect(() => {

    //we set our fnial object on each change from any of the included values
    const logValueObject =( ) => {

            setProfileCredentials(JSON.stringify({"name": name, "email": email, "password": password, "avatar": avatar, "banner":banner, }))
        
        console.log(profileCredentials)
        console.log(JSON.parse(profileCredentials))
        
        }

        logValueObject()
        
        

}, [name, email, password, avatar, banner])





    return <div><h1>Register</h1>
        
        <form> 
        
    <input placeholder="name"
    onChange={changeNameValue}
    > 
    

    </input>

    
    

    <input placeholder="email"
    onChange={changeEmailValue}
    >
    </input>
    
    <input placeholder="password"
    onChange={changePasswordValue}
    > 
    

    </input>





    <input placeholder="avatar"
    onChange={changeAvatarValue}
    > 
    

    </input>


    <input placeholder="banner"
    onChange={changeBannerValue}
    > 
    

    </input>



    
    <input type="button" value="Submit" onClick={logRequestObject}  ></input>
    
    </form>
    
    {errorMessage}
    
    
    </div> }


export default Register