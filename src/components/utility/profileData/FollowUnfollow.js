//current problem:: if you load into a profile that is: unfollow, unfollowing will not chnage state back to follow, updating page will put state back to follow
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
const [followedCheck, setFollowedCheck] = useState(false) //from this we want to do the same fileter function immediately instead of awaiting exclusive fetch private state

console.log(followedProfiles2.following)


const followCheck = "true";


const followArray = props.followArray;

console.log(followArray)
console.log(followArray)
console.log(followArray)


useEffect(() => {



   const checkFollow2 = () => {
   
        //have ternary move all to top state have mutual source
   
        console.log([followedProfiles2.following])

      followedProfiles2.following.map((item, index) => {

   

   //move this entire function to beginning, on load of all
   
   if( item.name == props.currentProfile.profile) {
      
      console.log(item.name == props.currentProfile.profile)
const arrayValue = [];

const newArray = arrayValue.push(item.name == props.currentProfile.profile)
console.log("success, a match has been found between currentprofile and followed profiles")
  
 


 changeBooleanState("Unfollow")






setFollowedProfiles(props.followArray)

   if(arrayValue[0] == false) {

      changeBooleanState("Follow")
      console.log("true true true")
   }

//we have cleared it all, we have the top level component now delivering a true for false and opposite astate with dynamiccal some opposite and some speicfic top level mothership with iteration for each unique key
//problem we have is that when we find a match, we know it is an immediate state change
//problem is, we do both of these conditions on each render,
//error, no match was found is done on each render
//except, when there is a match, then we cna change to unfollow,
//problem is that even when there is a match, we have a bunch of not matches, can we use index for this
//we need an if statement that only changes back to follow if there are absolutely no matches
//problem now, we have one match and the rest are no matches
//if matches are less than or something
//when we return absolutely no matches, we should always have only the option to follow
//problem is, if we are following, we only return one match and the rest is non-matches, we have to tell
//that one match is enough, that means we only setstate to unfollow because one match means exact profile is followed
//one match is the differentiator, have an arrray where we push array, if one item pushed == unfollow, if nothing in array, means follow

   //we set the callbackk, all is now
   return true
   } else {


    //  console.log(item.name)
   
   console.log("error, no match was found between each element in array of followed accounts and current account")
   

   return false
   }
   
   
      })
   
   
     // RecyclableFetch2("/social/profiles/"+ props.currentProfile +  "/follow", "PUT", undefined, defaultHeaders)
      return booleanState
   }
   
   checkFollow2()
   
   
   console.log(checkFollow2())
   
   
   
   
   //callback ALL IS NOWW// with useffec,t wwe have our event that is targettred, this will always detail its superiosr intel source
   //mothershuip source i refreshed on each iteratin, we create new detail value index ifg match superiossr unique match will be expected value





}, [setFollowedCheck])

   //here we remove.:

const FollowProfile = () => {
   const awaitData = async() => {

      //we have the opposite of the current top level, emaning we swift and adapt swiftly
      
      //three elements, change radically 
      //if booleanstate is follow, then we can follow
      const ternaryFollow = booleanState=="Unfollow" ? "unfollow" : "follow";
      //if this is correct everything is correct
      //all we need is to change state on request so it is updated for next async await request
      
         const defaultHeaders = {
            null: "application/json",
                 null: "application/json",
             Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTcyLCJuYW1lIjoiSm9oYW4iLCJlbWFpbCI6IkpvaEtqZTUyNTU0QHN0dWQubm9yb2ZmLm5vIiwiYXZhdGFyIjoiaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzLzEwLzkxLzk0LzEwOTE5NDhjNmI4MGI2NWI5ZWVmOGMxNjNmMGFlNDJhLmpwZyIsImJhbm5lciI6bnVsbCwiaWF0IjoxNjc1NjA2NjQwfQ.7MNKglEvnbdBs9fT6FkogF2u-8HTuScNGHgxESFU7IU',
              
       
             
         }; 
         RecyclableFetch2("/social/profiles/"+ props.currentProfile.profile + "/" + ternaryFollow , "PUT", undefined, defaultHeaders)
      
      
      
         //when we unfollow our state doesnt turn back to follow before we update
      setFollowedCheck(!ternaryFollow)
      
      }
      
      
awaitData()



//have useeffect that changes on the  state change


if(booleanState=="Unfollow") {
         
         
         
         
   changeBooleanState("Follow")} else {

   changeBooleanState("Unfollow")
} 


}



//go to larger state and have this function return value that is setto state and can be mitigated towardds lower level functions br




console.log(booleanState)







console.log(booleanState)



console.log(booleanState)













//awaitData() must be triggered once, only on the change of main state






return <div><button onClick={FollowProfile}>{booleanState}</button></div>

}


export default FollowUnfollow