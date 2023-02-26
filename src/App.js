import logo from './logo.svg';
import './css/custom.css'
//import 'bootstrap/dist/js/bootstrap.js';
import './App.css';

import { Navbar } from "react-bootstrap";
import { Nav, Container,NavDropdown, Form, Button} from "react-bootstrap"



import RecyclableFetch from './components/RecyclableFetch';


//import MapPosts from './components/MapPosts';
//import SpecificProfile from './components/utility/profileData/SpecificProfile';
//import Login2 from './components/Login2';
//import Register from './components/utility/Register';

import {MapPosts, SpecificProfile, Login2, Register, CreatePost } from "./Exports/ExportFiles"



import MapPosts2 from './components/MapPost2';
import { BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';



import Reaction from './components/Reaction';
import GetPostsWithAuthor from './components/GetPostsWithAuthor';
import MyProfile from './components/MyProfile';
import Login from './components/Login';

//import CreatePost from './components/utility/CreatePost';
import { currentUser } from './variables/Variables';
import AddComment from './components/AddComment';
import InlineEdit from './Edit/Edit';
import MyProfile2 from './components/MyProfile2';
import SearchFunction from './components/searchFunction/SearchFunction';
import AllProfiles from './components/utility/profileData/AllProfiles';
import NavbarDefault from './components/utility/Navbar/NavbarComponent';
import { useEffect, useState } from 'react';
import DirectUser from './components/utility/Navbar/DirectUser';
import AllPosts from './components/Posts/AllPosts';
import SpecificPost from './components/Posts/SpecificPost';


function App() {


const [state, setState] = useState("https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max");



if(state != null) {
  console.log(state)
}

useEffect(()=> {


  DirectUser()

  console.log(DirectUser)


}, [])



const awaitValue = async () => {


  console.log( await RecyclableFetch("/social/posts"))
}


let ternary = currentUser ? "Log out" : "Log In";


const LoginFunction = ( ) => {



  console.log(ternary)
  
}






  return (
    <div className="App">








<Router>


<NavbarDefault profileavatar = {state}/>

  <Routes>

  <Route exact path ='/' element={<MapPosts endpoint="/social/posts" stateValue={state} setStateValue={setState} />}></Route>


    <Route  path = '/profiles/:profile' element={<SpecificProfile/>}></Route>
    
    <Route  path = '/posts/:id' element={<SpecificPost/>}></Route>
    <Route  path = '/profiles' element={<AllProfiles/>}></Route>
    <Route  path = "/myPage/:currentUser"  element={<MyProfile2/>}></Route>
    <Route  path = '/login' element={<Login2/>}></Route>
    <Route  path = '/Register' element={<Register/>}></Route>
    <Route  path = '/Post' element={<CreatePost/>}></Route>
    <Route  path = '/Posts' element={<AllPosts/>}></Route>
    <Route  path = '/Search' element={<SearchFunction/>}></Route>
  </Routes>





</Router>

     

<footer id="sticky-footer" className="flex-shrink-0 py-4 bg-dark text-white-50 navbar-fixed-bottom">
    <div className="container text-center">
    
      <small>Copyright &copy; Business Chat</small>
    </div>
  </footer>
    </div>
  );
}

export default App;
