import logo from './logo.svg';
import './css/custom.css'

import './App.css';



import RecyclableFetch from './components/RecyclableFetch';




import {MapPosts, SpecificProfile, Login2, Register, CreatePost } from "./Exports/ExportFiles"




import { BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';





import { currentUser } from './variables/Variables';


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



useEffect(()=> {


  DirectUser()

  console.log(DirectUser)


}, [])










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
