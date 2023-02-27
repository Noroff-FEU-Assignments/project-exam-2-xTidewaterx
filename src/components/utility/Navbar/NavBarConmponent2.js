import { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import { Nav, Container,NavDropdown, Form, Button} from "react-bootstrap"
import SearchFunction from "../../searchFunction/SearchFunction";
import LogInOrOut from "./LoginOrOut";
import { Link } from "react-router-dom";
import { Router } from "react-router-dom";
import Logo from "../Logo/business-chat-logo-refined.png"
import Popper from 'popper.js';

const currentUser = localStorage.getItem("currentUser");

console.log(currentUser)


const NavbarDefault = () => {

const [profileState, changeProfileState] = useState( currentUser ? "Log Out" : "Log In")




useEffect(() => {


changeProfileState( currentUser ? "Log Out" : "Log In")


})


useEffect(()=> {



}, [])


function  activateSearch() {
console.log(window.location.pathname)

if(window.location.pathname == "/Search") {

  console.log("We are at path /Search")
} else {

  document.location ="/Search"
}

  

} 


 

//have search onclick lead to the /search direcotry where component is on its own, navbar top default and then any seraches go in

    return  (

  <div>

    <nav className="navbar navbar-expand-lg bg-light">



      <Navbar.Brand> <Link to={"/"}> <img className="logo" src= {Logo}></img> </Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link>  <Link to={"/"}>Home</Link></Nav.Link>
        

          <Nav.Link>  <Link to={"/Posts"}>Posts</Link></Nav.Link>
          <Nav.Link>  <Link to={"/Profiles"}>Profiles</Link></Nav.Link>
        
              
         
    
          <ul className="dropdown-menu" title="" id="navbarScrollingDropdown">
          
          
          <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>

          
          
            <NavDropdown.Item href="/Posts">            <Nav.Link>  <Link to={"/Posts"}>Posts</Link></Nav.Link>     </NavDropdown.Item>
            <NavDropdown.Item href="#action4">
            <Nav.Link>  <Link to={"/Profiles"}>Profiles</Link></Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </ul>

  <Form  className="d-flex search-login">
        <div className="searchArea">
    
         <Link to={"/Search"}>     
         
          <Button className="search-button">Search</Button> </Link>    
     
          <button state={profileState} onClick={LogInOrOut} className="btn btn-primary login-button" id="nav-login-button">{profileState}</button>
     </div> 
     
  </Form>

    
        </Nav>
        <div className = "propType.profile"></div>
      </Navbar.Collapse>
 </nav></div>
    )
}


export default NavbarDefault