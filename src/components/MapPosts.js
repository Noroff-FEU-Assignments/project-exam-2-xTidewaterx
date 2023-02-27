import { useEffect, useState } from "react"
import RecyclableFetch from "./RecyclableFetch"
import {  Link } from "react-router-dom"
import Reaction from "./Reaction2"

import CommentSection from "./utility/CommentSection"
import CreatePost from "./utility/CreatePost"
import AddComment from "./AddComment"
import FollowUnfollow from "./utility/profileData/FollowUnfollow4"

import { currentUser } from "../variables/Variables"

import FollowedProfiles from "./utility/profileData/FollowedProfiles"
import Spinner from 'react-bootstrap/Spinner';



const MapPosts = (props) => {




const [state, changeState] = useState(null)
const [followedProfiles, setFollowedProfiles] = useState(null);
const [importState, changeImportState] = useState(false) 
const [rerender, setRerender] = useState(false);


const FollowedProfiles5 = FollowedProfiles(currentUser); 



useEffect(()=> {


console.log("message: imported child component has successfully changes state of parent component")


setRerender(!rerender) 

console.log(rerender)



},[importState])






    useEffect(() => {

        


const awaitValue = async() => {


setFollowedProfiles(FollowedProfiles5)

if(FollowedProfiles5) {
    setFollowedProfiles(FollowedProfiles5)
}




    const fetchFollowedProfiles = await  RecyclableFetch(`/social/profiles/` + currentUser + "?_following=true&_followers=true")




setFollowedProfiles(await fetchFollowedProfiles)
if(props.setStateValue) {

props.setStateValue(await fetchFollowedProfiles)
}



    
   

   
   changeState(await RecyclableFetch( props.endpoint +"?_author=true&_comments=true&_reactions=true"))
    
    

if(state!= null) {
    console.log( state)
    
console.log( state)
    
console.log( state)

}

    

}


awaitValue()

    }, [rerender])






if(followedProfiles != null) {

console.log(followedProfiles)

if(followedProfiles.errors ) {

    console.log("error error")


    return <div className="error-message">Sorry, an error occoured: {followedProfiles.status}</div>
}}






if(state==null) {

    return <div className="loading-container">...Loading       <Spinner className="spinner-symbol" style={{width:"80px", height: "80px"}} animation="border" variant="secondary" /></div>
} if(FollowedProfiles5!= null) {





    return ( 
        
       <div>  <CreatePost importState={importState} changeImportState={changeImportState}/>
       
       <section className="" >
       {
        
        
         state.map((item, index) => {
      
        return (        <div className="post-container w-50 p-3  mb-5 p-5 w-100 p-0">    



  


<div className="profile-card-container " style={{maxHeight: "120px"}}>




<div className="row profile-card-container-outline">
<div className="col-lg-3 p-0" style={{width:"auto"}}><Link to={`/profiles/${item.author.name}`}>
     <img src= 
     {item.author?.avatar? item.author.avatar : "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max" } 
     alt="no image" className="img-fluid profile-avatar-image "
     style = {{width: '70px', height: '70px'}}     
      />  </Link>  <div className="col-sm-9 side-avatar-username"><p className="mb-0 ms-0 mt-2 fw-bold text-center">{item.author.name}    <p className="mb-0 me-2 ms-0 mt-2 email-tag fw-light">     @{item.author.email}
                </p>  <p className="email-tag fw-light">  </p></p></div> </div> 
      
      <div className="col-sm-9 under-avatar-username"><p className="mb-0 ms-0 mt-2 fw-bold text-start">{item.author.name}    <p className="mb-0 me-2 ms-0 mt-2 email-tag fw-light">     @{item.author.email}
                </p>  <p className="email-tag fw-light">  </p></p></div>


                
<div className="follow-container" style={{padding:"0px", marginTop: "-10px"} }>

<div className="row pl-0 m-0">

<FollowUnfollow followArray = {FollowedProfiles5} currentUser={currentUser} currentProfile={item.author.name} />

</div>


              
                </div>
                </div> 

                 
      


</div>


















<div className="post-image-card" style={{paddingLeft: "32px"}}><img className="commentsection-post-images" src= {item.media? item.media : "nothing"} alt="" /></div>
    <h2 key={item.id}>{item.title}</h2>
    <p>{item.body}</p>



<Reaction reactionValue= {item.reactions} reactionValues= {state} idValue={item.id}  />
<div className="comments p-5 mb-5"><CommentSection commentValue = {item.comments} importState= {importState} changeImportState={changeImportState}/></div>


<div className="comment-section-container"> <AddComment  idValue={item.id} indentation={"Comment"} importState={importState} changeImportState={changeImportState}/></div> 

        </div>)

        
        


    })       

} </section></div>
    
    
    )



}









} 



export default MapPosts




