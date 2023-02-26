import { useEffect, useState } from "react"
import RecyclableFetch from "./RecyclableFetch"
import { BrowserRouter, Link } from "react-router-dom"
import Reaction from "./Reaction2"
import FollowProfile from "./FollowProfile"
import GetProfile from "./GetProfile"
import CommentSection from "./utility/CommentSection"
import CreatePost from "./utility/CreatePost"
import AddComment from "./AddComment"
import FollowUnfollow from "./utility/profileData/FollowUnfollow4"

import { currentUser } from "../variables/Variables"
import AllProfiles from "./utility/profileData/AllProfiles"
import FollowedProfiles from "./utility/profileData/FollowedProfiles"
import Spinner from 'react-bootstrap/Spinner';
//link inside browserrouter, link inherits
//we installed brwoserrouter, now we have the lines that is specific iteration
//dynamic values and all of a certain array returned browserrouter
//all can be rendered through parent component with brwoserrouter on load provide brwoserrouterrr
//url is changed, all can be reach globally, have component that takes prop from mothership




const MapPosts = (props) => {

    // this is now operational, proble, have it check new data on event of login



const [state, changeState] = useState(null)
const [followedProfiles, setFollowedProfiles] = useState(null);
const [importState, changeImportState] = useState(false) //then useffect that re renders fetch with updated values after child changes this state on event
const [rerender, setRerender] = useState(false);

//values change and become something

const FollowedProfiles5 = FollowedProfiles(currentUser); //this value is first nothing, we must only do soemthing once it is fetched
//if we can change state to the function we have created outside, we can have much less code here,
//the function returns code as we have here, we log the value
//we have the function, problem is, functino first returns a different state
//we must await the value in followedPorfiles5, problem is we are asking for a resource yet to come

//we have same return, double useeffect
//correct state change, bounce opposite array


useEffect(()=> {


console.log("message: imported child component has successfully changes state of parent component")
//this useEffect only fires on the initial change of the importState
//we need to change the correct state to bounce

setRerender(!rerender) //it checks itself

console.log(rerender)



},[importState])






    useEffect(() => {

        
//original fetc his synced with all original code

const awaitValue = async() => {


setFollowedProfiles(FollowedProfiles5)

if(FollowedProfiles5) {
    setFollowedProfiles(FollowedProfiles5)
}


//there is a problem that our state in the other component needs instant state here

    const fetchFollowedProfiles = await  RecyclableFetch(`/social/profiles/` + currentUser + "?_following=true&_followers=true")

//console.log(await fetchFollowedProfiles) //check this, is it okay ,turned off


setFollowedProfiles(await fetchFollowedProfiles)
if(props.setStateValue) {

props.setStateValue(await fetchFollowedProfiles)
}
//FollowedProfiles(currentUser); //just the function breaks the code
//setFollowedProfiles(FollowedProfiles(currentUser)); //this single line changes the entire code, and ruins it, but values are the same?


        



  // console.log(RecyclableFetch("social/posts"))

    //GET /api/v1/social/profiles/<name>/posts

    //localstorage value must exist on login, that is the value of all personal exact organism use
   // /social/posts/following

    
   
   // changing this::
   
   changeState(await RecyclableFetch( props.endpoint +"?_author=true&_comments=true&_reactions=true"))
    
    

if(state!= null) {
    console.log( state)
    
console.log( state)
    
console.log( state)

}

    
    //values of imported child to change global state of parent component with props and stae object 
    //global crest 
    
    
    
    //returning all followed profiles
    //later compare arrays and after this return all posts minus any post that matches array objects that we have logged because of follow
    //just add something that if follow is false, then log posts
}


awaitValue()

    }, [rerender])




        
   // <Link to= {'/post/id'}> </Link>






//we hvae now made cirlces, ripple effect ,all is now gotten, we have dynamic follow that checks array and each dynamic value against it
//now there is peace an all has be conquered, we have entire values, dynamic and within to embrace new array values map function method


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
        //    console.log(FollowedProfiles5)

//all values and array, iteration superloop

      //values and get id value, value to follow and check same array for versions from mothership
//went back, redid the structure to ensure vertical elev up
//iterate for each, use specific value //only when avatar is present are we presetned image on detail page, becausse avatar is there when it is there //{item.author.avatar}
   //we are in a certain iteration no matter what is written inside of the iteration, mape is here
   //we hvae better return as useffect is waiting, whilst component fires on instant
        return (        <div className="post-container w-50 p-3  mb-5 p-5 w-100 p-0">    



  


<div className="profile-card-container ">




<div className="row">
<div className="col-lg-3 p-0" style={{width:"auto"}}><Link to={`/profiles/${item.author.name}`}>
     <img src= 
     {item.author?.avatar? item.author.avatar : "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max" } 
     alt="no image" className="img-fluid profile-avatar-image "
     style = {{width: '70px', height: '70px'}}     
      />  </Link>  <div className="col-sm-9 side-avatar-username"><p className="mb-0 ms-0 mt-2 fw-bold text-center">{item.author.name}    <p className="mb-0 me-2 ms-0 mt-2 email-tag fw-light">     @{item.author.email}
                </p>  <p className="email-tag fw-light">  </p></p></div> </div> 
      
      <div className="col-sm-9 under-avatar-username"><p className="mb-0 ms-0 mt-2 fw-bold text-start">{item.author.name}    <p className="mb-0 me-2 ms-0 mt-2 email-tag fw-light">     @{item.author.email}
                </p>  <p className="email-tag fw-light">  </p></p></div>


                
<div className="follow-container" style={{padding:"0px"}}>

<div className="row pl-0 m-0">

<FollowUnfollow followArray = {FollowedProfiles5} currentUser={currentUser} currentProfile={item.author.name} />

</div>


              
                </div>
                </div> 

                 
      


</div>


















<div className="post-image-card"><img className="commentsection-post-images" src= {item.media? item.media : "nothing"} alt="" /></div>
    <h2 key={item.id}>{item.title}</h2>
    <p>{item.body}</p>



<Reaction reactionValue= {item.reactions} reactionValues= {state} idValue={item.id}  />
<div className="comments p-5 mb-5"><CommentSection commentValue = {item.comments} importState= {importState} changeImportState={changeImportState}/></div>


<div className="comment-section-container"> <AddComment  idValue={item.id} indentation={"Comment"} importState={importState} changeImportState={changeImportState}/></div> 

        </div>)

        
        


    })       //here stops map

} </section></div>
    
    
    )



}









} // image keeps value even if nothing of resource is fetched, img tag enough



export default MapPosts




//comment section addition of values
//<CommentSection commentValue = {item.comments}/>
