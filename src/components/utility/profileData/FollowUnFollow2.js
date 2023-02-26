//comopnent that must check wether or not logged in profile already follows account
//component returns true or false based on this, with that we can decide value/function of button

import { useEffect, useState } from "react"
import { json } from "react-router-dom";
import RecyclableFetch2 from "../../RecyclableFetch2";



const FollowUnfollow = (props) => {



//const followCheck = match ? "unfollow" : "follow";
const [booleanState, changeBooleanState] = useState("Follow")
const [followedProfiles, setFollowedProfiles] = useState(props.followArray)

const followCheck = "true";


const followArray = props.followArray;



function followedProfilesFunction () {




}  followedProfilesFunction()





useEffect(() => {


   const awaitData = async ( ) => {
      ///api/v1/social/profiles/<name>?_following=true&_followers=true
   
      //console.log(await RecyclableFetch2("/social/profiles/" + props.currentUser + "?_following=true&_followers=true"))
   let jsonData = await RecyclableFetch2("/social/profiles/" + props.currentUser + "?_following=true&_followers=true")
   

     setFollowedProfiles(await jsonData.following)
      console.log(jsonData)       

   
   
   }

   awaitData()
   

}, [])




























useEffect(() => {




      
   

   
   
         if(followedProfiles != null) {
   
          const followedProfilesArray = followedProfiles;
   
          const result = followedProfilesArray.filter(item => item.name != props.currentProfile)
   
   
   
            const checkFollow = () => {
   
        
   
   
               followedProfilesArray.map((item) => {
   
   
   
         //move this entire function to beginning, on load of all
   
         if( item.name == props.currentProfile.profile) {
   
            console.log("success, a match has been found between currentprofile and followed profiles")
            changeBooleanState("Unfollow")
            return true
         } else {
   
            console.log("error, no match was found between each element in array of followed accounts and current account")
   
   
            return false
         }
   
      
               })
   
   
               return booleanState
            }
   
            checkFollow()
   
   
       
   

   
   
     //</name> changeState(await RecyclableFetch("/social/profiles/Johan/posts?_author=true&_comments=true&_reactions=true"))
      // /api/v1/social/profiles/<name>
   
   }
   





}, [followedProfiles])












//awaitData() must be triggered once, only on the change of main state






return booleanState

}


export default FollowUnfollow