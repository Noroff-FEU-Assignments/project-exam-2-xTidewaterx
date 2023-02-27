import { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import { Nav, Container,NavDropdown, Form, Button} from "react-bootstrap"
import SearchFunction from "../../searchFunction/SearchFunction";
import LogInOrOut from "./LoginOrOut";
import { Link, NavLink } from "react-router-dom";
import { Router } from "react-router-dom";
import Logo from "../Logo/business-chat-logo-refined.png"
import Popper from 'popper.js';
import { currentUser } from "../../../variables/Variables";
import { useSearchParams } from "react-router-dom";
import { currentAvatar } from "../../../variables/Variables";







const NavbarDefault = (props) => {

const [profileState, changeProfileState] = useState( currentUser ? "Log Out" : "Log In")

const [searchParams, setSearchParams] = useSearchParams();

console.log(searchParams)

if(props.profileavatar !== null) {
  console.log(props.profileavatar)
  console.log(props.profileavatar)
  console.log(props.profileavatar.statusCode > 300)
  
  // we harethrough, confimred, valkue outside ocmponent brace different scopes
}
console.log(props.profileavatar.avatar)
//value confirmed, value from top level ,and same fetch for resrouces, we have value



if(props.stateValue != null) {
  console.log(props.stateValue)
}
console.log(props.stateValue)




useEffect(() => {


changeProfileState( currentUser ? "Log Out" : "Log In")


})





function  activateSearch() {
console.log(window.location.pathname)

if(window.location.pathname == "/Search") {

  console.log("We are at path /Search")
} else {

  document.location ="/Search"
}

  

} 


 if(props.profileavatar.statusCode > 300) {


  return <div className="error-message">Error, sorry: <h3>{props.profileavatar.statusCode}: {props.profileavatar.status}</h3></div>
 }

//have search onclick lead to the /search direcotry where component is on its own, navbar top default and then any seraches go in
else {
    return  (

  <div className="nav-navigation">




    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand><Link to={"/"}> <img className="logo" src= {Logo}></img> </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav navbar-expand-sm bg-light">
          <Nav className="me-auto"  > 
          <Nav.Link as={NavLink} className="link-element"to="/" activeClassName="active">Home </Nav.Link>
          <Nav.Link as={NavLink} className="link-element"to="/Posts" activeClassName="active">Posts </Nav.Link>
       
        
            <Nav.Link as={NavLink}  className="link-element" to="/Profiles" activeClassName="active">Profiles</Nav.Link>
            <Nav.Link as={NavLink}  className="link-element" to={"/myPage/" + currentUser } activeClassName="active">My Profile</Nav.Link>
     
        
        

            <Form  className="d-flex">
        <div className="searchArea">
    
         <Link to={"/Search"}>     
         
          <Button className="search-button">Search</Button> </Link>    
     
     <Link to={"/Login"}>  <button state={profileState} onClick={LogInOrOut} className="btn btn-primary border-0 login-button" id="nav-login-button">{profileState}</button></Link>   
     </div> 
     
  </Form>


          </Nav>
        </Navbar.Collapse>

        <Link to={"/myPage/" + currentUser}><img className = "nav-avatar" style={{width: "100px"}} src={currentAvatar? currentAvatar : "nothing"}></img></Link>
      </Container>
    </Navbar>
  


</div>
    )
}}


export default NavbarDefault