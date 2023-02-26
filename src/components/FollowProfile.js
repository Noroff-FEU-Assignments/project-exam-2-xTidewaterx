import { useState } from "react";
import RecyclableFetch2 from "./RecyclableFetch2"
import FollowUnfollow from "./utility/profileData/FollowUnfollow";

//component that needs the idvalue profilevalue, means name, then does request to ofolow on click of follow button
//default headers because descriptions of body must be left out when it is superfluous
//we have turned component into becoming the all center for intel devoured through defiance top level

const defaultHeaders = {
     null: "application/json",
          null: "application/json",
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTcyLCJuYW1lIjoiSm9oYW4iLCJlbWFpbCI6IkpvaEtqZTUyNTU0QHN0dWQubm9yb2ZmLm5vIiwiYXZhdGFyIjoiaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzLzEwLzkxLzk0LzEwOTE5NDhjNmI4MGI2NWI5ZWVmOGMxNjNmMGFlNDJhLmpwZyIsImJhbm5lciI6bnVsbCwiaWF0IjoxNjc1NjA2NjQwfQ.7MNKglEvnbdBs9fT6FkogF2u-8HTuScNGHgxESFU7IU',
       

      
  }; 



const FollowProfile = (props) =>  {


const asyncFunction = async(param ) => {


 return await param //usually param means, param becomes a value, and now all described event occour on this value
//so when we enter a param value that exist in an async function and it is awaited by defualt, however we have to add await still

}

//await only ready inside async function, await has a problem being applied automatically to values in another function, await something in wrong function format

//const a = await; //reserved word await only inside async functions, problem dynamic async function inside non-async function with pre rednered await value, value returned is without await in new function call inside normal function without async async leap

const AwaitData = async() => {



  // console.log(a asyncFunction(RecyclableFetch2("/social/profiles")))

   console.log( await asyncFunction(RecyclableFetch2("/social/profiles")))



const profileValue = props.profileValue; // this must become a props value, that gets exact profile linked to post iteration::



//Using the optional _flag query parameters available it is possible to access author, comments and reactions within this response object. 
//// GET /api/v1/social/posts/0?_author=true&_comments=true&_reactions=true   --- we have id and find corrsponding author using flag query params in the url, on load we have another request that checks profiles asnd logs that with, specific match by id and iteration together




    RecyclableFetch2("/social/profiles/"+ profileValue + "/follow", "PUT", undefined, defaultHeaders)
}


return <button onClick={AwaitData} id={props.idValue}>Follow</button>



}


export default FollowProfile



//here we can have both headers become null, just in this case, values are different here
//headers must be gone for reqeust without body in this case, we have a put