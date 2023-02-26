import { currentUser } from "../../../variables/Variables"

const DirectUser = () => {



console.log(document.location.pathname)
console.log(document.location.pathname == "/Login")

if(document.location.pathname == "/Login"  ||  document.location.pathname ==  "/Register" ) {
  
console.log("correct path")
    } else {


if(!currentUser) {

    document.location = "/Login"

    console.log("redirecting to /Login because pathname was not /Login or /Register in combination with no registered userprofile")
}


    }





 
}












export default DirectUser