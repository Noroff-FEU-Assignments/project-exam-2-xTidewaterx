
//comopnent that must check wether or not logged in profile already follows account
//component returns true or false based on this, with that we can decide value/function of button

import { useEffect, useState } from "react"
import { json } from "react-router-dom";
import RecyclableFetch2 from "../../RecyclableFetch2";


const defaultHeaders = {
   null: "application/json",
        null: "application/json",
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTcyLCJuYW1lIjoiSm9oYW4iLCJlbWFpbCI6IkpvaEtqZTUyNTU0QHN0dWQubm9yb2ZmLm5vIiwiYXZhdGFyIjoiaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzLzEwLzkxLzk0LzEwOTE5NDhjNmI4MGI2NWI5ZWVmOGMxNjNmMGFlNDJhLmpwZyIsImJhbm5lciI6bnVsbCwiaWF0IjoxNjc1NjA2NjQwfQ.7MNKglEvnbdBs9fT6FkogF2u-8HTuScNGHgxESFU7IU',
     

    
}; 


const FollowUnfollow = (props) => {



//const followCheck = match ? "unfollow" : "follow";
const [booleanState, changeBooleanState] = useState("Follow")
const [followedProfiles, setFollowedProfiles] = useState(null)
const [followedProfiles2, setFollowedProfiles2] = useState(props.followArray) //from this we want to do the same fileter function immediately instead of awaiting exclusive fetch private state

console.log(followedProfiles2.following)


const followCheck = "true";


const followArray = props.followArray;

console.log(followArray)
console.log(followArray)
console.log(followArray)


useEffect(() => {



   const checkFollow2 = () => {
   
        //have ternary move all to top state have mutual source
   
   
      followedProfiles2.following.map((item) => {
   
   
   
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
   
   
     // RecyclableFetch2("/social/profiles/"+ props.currentProfile +  "/follow", "PUT", undefined, defaultHeaders)
      return booleanState
   }
   
   checkFollow2()
   
   
   console.log(checkFollow2())
   
   
   
   
   





})

   



//go to larger state and have this function return value that is setto state and can be mitigated towardds lower level functions br




console.log(booleanState)







console.log(booleanState)



console.log(booleanState)













//awaitData() must be triggered once, only on the change of main state






return booleanState

}


export default FollowUnfollow