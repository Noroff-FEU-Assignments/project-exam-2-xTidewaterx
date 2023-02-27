const LogInOrOut = (props) => {




if(props.state =="Log In") {


    document.location = "/Login"
} else {

    localStorage.removeItem("currentUser")
    localStorage.removeItem("currentToken")
    localStorage.removeItem("currentAvatar")
    document.location= "/Login"
}




} 



export default LogInOrOut