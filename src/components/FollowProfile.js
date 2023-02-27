import { useState } from "react";
import RecyclableFetch2 from "./RecyclableFetch2"
import FollowUnfollow from "./utility/profileData/FollowUnfollow";



const defaultHeaders = {
     null: "application/json",
          null: "application/json",
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTcyLCJuYW1lIjoiSm9oYW4iLCJlbWFpbCI6IkpvaEtqZTUyNTU0QHN0dWQubm9yb2ZmLm5vIiwiYXZhdGFyIjoiaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzLzEwLzkxLzk0LzEwOTE5NDhjNmI4MGI2NWI5ZWVmOGMxNjNmMGFlNDJhLmpwZyIsImJhbm5lciI6bnVsbCwiaWF0IjoxNjc1NjA2NjQwfQ.7MNKglEvnbdBs9fT6FkogF2u-8HTuScNGHgxESFU7IU',
       

      
  }; 



const FollowProfile = (props) =>  {


const asyncFunction = async(param ) => {


 return await param 
}



const AwaitData = async() => {





   console.log( await asyncFunction(RecyclableFetch2("/social/profiles")))



const profileValue = props.profileValue; 




    RecyclableFetch2("/social/profiles/"+ profileValue + "/follow", "PUT", undefined, defaultHeaders)
}


return <button onClick={AwaitData} id={props.idValue}>Follow</button>



}


export default FollowProfile



