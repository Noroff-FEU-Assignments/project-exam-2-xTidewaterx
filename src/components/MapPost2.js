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
//link inside browserrouter, link inherits
//we installed brwoserrouter, now we have the lines that is specific iteration
//dynamic values and all of a certain array returned browserrouter
//all can be rendered through parent component with brwoserrouter on load provide brwoserrouterrr
//url is changed, all can be reach globally, have component that takes prop from mothership




const MapPosts2 = (props) => {

    // this is now operational, proble, have it check new data on event of login



const [state, changeState] = useState(null)
const [followedProfiles, setFollowedProfiles] = useState(null);
const [importState, changeImportState] = useState(false) //then useffect that re renders fetch with updated values after child changes this state on event
const [rerender, setRerender] = useState(false);
const [returnValueState, changeReturnValueState] = useState([])
const [returnValueState2, changeReturnValueState2] = useState([])
//values change and become something

const FollowedProfilesValue =  FollowedProfiles(currentUser); //this value is first nothing, we must only do soemthing once it is fetched
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


setFollowedProfiles(FollowedProfilesValue)

if(FollowedProfilesValue) {
    setFollowedProfiles(FollowedProfilesValue)
}








//we have to create something that accepts a single value as true, if any match then immediately return and stop
//object must hen be returned



//there is a problem that our state in the other component needs instant state here

   // just const fetchFollowedProfiles = await  RecyclableFetch(`/social/profiles/` + currentUser + "?_following=true&_followers=true")

//console.log(await fetchFollowedProfiles) //check this, is it okay ,turned off


// just setFollowedProfiles(await fetchFollowedProfiles)

const followProfiles = followedProfiles;

console.log(followProfiles)
//FollowedProfiles(currentUser); //just the function breaks the code
//setFollowedProfiles(FollowedProfiles(currentUser)); //this single line changes the entire code, and ruins it, but values are the same?


        



  // console.log(RecyclableFetch("social/posts"))

    //GET /api/v1/social/profiles/<name>/posts

    //localstorage value must exist on login, that is the value of all personal exact organism use
   // /social/posts/following

    let returnValue = await RecyclableFetch( props.endpoint +"?_author=true&_comments=true&_reactions=true");
   //when we log into our app we get back the profiles we follow, reutrn all posts, then first add 
   //any posts from somebody we follow, then all the !follow posts are added, then this array is logged into our home page
//just check names(unique identifier) against the name of posts iteration ,then return and put into array, and after that we have if not this value match add into array laready created

   // changing this::
   
   // previous :::    changeState(await RecyclableFetch( props.endpoint +"?_author=true&_comments=true&_reactions=true"))
    
//all we need is a map funcion that checks if a vlue matches with any of the values in the array

changeState(returnValue);
   // most important function to create all in component::::  changeState(returnValue);

if(FollowedProfilesValue != null) {

   const followedArray = FollowedProfilesValue.following.map((item) => {return item.name})
   console.log(followedArray)
     // most important function to create all in component::::  changeState(returnValue);

     const optimizedFollowedString =  followedArray.toString();
 console.log(optimizedFollowedString)



 //now have array 24
 
}

     //it was too taxing on our ram for the computer load to overtake such a thing as indivdually iterating
     //each item 10, 20+ cases for our solution, now all have to be checked once against our big array, and if true
     //it is just to  get a case feeel of it, now we check if long string includes exact value perfect glboal scope and entire once
     //data optimzation
   //we need to check if the names in our objects returned match any of the string values in this array::


//

//create function that creates the correct state 
//we have initial load of all posts, then on return of next array everything changes to be more specific
//have two maps, and return values


    //all we have to do is change state into the array that is : followed profiles, not followed profiles

    
    //values of imported child to change global state of parent component with props and stae object 
    //global crest 
    
    {


     






        if(state != null) {
        
        state.map((item, index) => {


           const followedArray = FollowedProfilesValue.following.map((item) => {return item.name})
  console.log(followedArray)
    // most important function to create all in component::::  changeState(returnValue);

    const optimizedFollowedString =  followedArray.toString();
console.log(optimizedFollowedString)


       const followTrue = optimizedFollowedString.includes(item.author.name)
       if(followTrue == true) {
           console.log(item.author.name)
           
           let followStateArray = [];

           followStateArray = returnValueState; //we always begin from state that holds previous changes and we build push from previous

           followStateArray.push(item)

      

           console.log(returnValueState)
              
              console.log(item)
           
           //now have array 242 returned to us, have this array be mapped first, then the other, this array is a bit weird, but both are from the same call
           //we uilise the same fetch for both arrays
           
           
      }})} }





    
    //returning all followed profiles
    //later compare arrays and after this return all posts minus any post that matches array objects that we have logged because of follow
    //just add something that if follow is false, then log posts
}


awaitValue()

    }, [rerender])




        
   // <Link to= {'/post/id'}> </Link>



//foollowarray, delivers 11 we have values, each object we iterate through has its name value chcked against our followed name values
//each post iteration is checked against each of our followed name values, if they bouth carry same name value, object is clear
//we have original map of all posts, then inside another, smaller iteration method, foreach checks the global iteration props item against its own name identifier values
//iteration is chekced against each value in another, smaller array


//we hvae now made cirlces, ripple effect ,all is now gotten, we have dynamic follow that checks array and each dynamic value against it
//now there is peace an all has be conquered, we have entire values, dynamic and within to embrace new array values map function method


//console.log(followedProfiles)




if(state==null) {

    return <div>...Loading</div>
} if(FollowedProfilesValue!= null) {

//actually did it, all is here, each value is checked againsdt the truth arrayyy, values are all clear, process ofm athc, only when we know, then value set

   

    return ( 
        
       <div>  <CreatePost/>
       
       <section className="" >


{returnValueState.map((item, index) => {

console.log(state)
console.log(returnValueState)

return (


    <div className="post-container w-50 p-3  mb-5 p-5">    



  


<div className="profile-card-container ">


<div className="row profile-row">


<div className="col-sm-2"><Link to={`/profiles/${item.author.name}`}>
     <img src= 
     {item.author?.avatar? item.author.avatar : "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max" } 
     alt="no image" className="img-fluid profile-avatar-image "
     style = {{width: '50px', height: '50px'}}     
      />     </Link> 
                
<div>
<FollowUnfollow followArray = {FollowedProfilesValue} currentUser={currentUser} currentProfile={item.author.name} /></div>


              
                </div>    <div className="col-sm-8">                 
                <p className="mb-0 me-2 ms-3 mt-2 fw-bold">{item.author.name}    <p className="mb-0 me-2 ms-3 mt-2 email-tag fw-light">     @{item.author.email}
                </p>  <p className="email-tag fw-light">  </p></p>
                </div>
              
          
            
attempt::: <div> <AddComment  idValue={item.id} indentation={"Reply"} importState={importState} changeImportState={changeImportState}/></div> 

             
                 
                 
                 
                  </div>


</div>


















<img src= {item.media} alt="" />
    <h2 key={item.id}>{item.title}</h2>
    <p>{item.body}</p>



<Reaction reactionValue= {item.reactions} reactionValues= {state} idValue={item.id}  />
<div className="comments p-5 mb-5"><CommentSection commentValue = {item.comments}/></div>

<div className="add-comment pt-5"><AddComment idValue={item.id} replyId={null} indentation={"Comment"} />

</div>

        </div>)

        
        


    })       //here stops map

} 



    
 














{state.map((item, index) => {



//all values and array, iteration superloop

      //values and get id value, value to follow and check same array for versions from mothership

//iterate for each, use specific value //only when avatar is present are we presetned image on detail page, becausse avatar is there when it is there //{item.author.avatar}
   //we are in a certain iteration no matter what is written inside of the iteration, mape is here
   //we hvae better return as useffect is waiting, whilst component fires on instant
        return (        <div className="post-container w-50 p-3  mb-5 p-5">    



  


<div className="profile-card-container ">


<div className="row profile-row">


<div className="col-sm-4"><Link to={`/profiles/${item.author.name}`}>
     <img src= 
     {item.author?.avatar? item.author.avatar : "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max" } 
     alt="no image" className="img-fluid profile-avatar-image "
     style = {{width: '50px', height: '50px'}}     
      />     </Link> 
                
<div>
<FollowUnfollow followArray = {FollowedProfilesValue} currentUser={currentUser} currentProfile={item.author.name} /></div>


              
                </div>    <div className="col-sm-8">                 
                <p className="mb-0 me-2 ms-3 mt-2 fw-bold">{item.author.name}    <p className="mb-0 me-2 ms-3 mt-2 email-tag fw-light">     @{item.author.email}
                </p>  <p className="email-tag fw-light">  </p></p>
                </div>
              
          
            
attempt::: <div> <AddComment  idValue={item.id} indentation={"Reply"} importState={importState} changeImportState={changeImportState}/></div> 

             
                 
                 
                 
                  </div>


</div>


















<img src= {item.media} alt="" />
    <h2 key={item.id}>{item.title}</h2>
    <p>{item.body}</p>



<Reaction reactionValue= {item.reactions} reactionValues= {state} idValue={item.id}  />
<div className="comments p-5 mb-5"><CommentSection commentValue = {item.comments}/></div>

<div className="add-comment pt-5"><AddComment idValue={item.id} replyId={null} indentation={"Comment"} />

</div>

        </div>)

        
        


    })       //here stops map

} </section></div>
    
    
    )



}








} // image keeps value even if nothing of resource is fetched, img tag enough



export default MapPosts2




//comment section addition of values
//<CommentSection commentValue = {item.comments}/>
