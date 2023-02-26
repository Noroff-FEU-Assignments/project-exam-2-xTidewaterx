import { useState } from "react"

import RecyclableFetch2 from "./RecyclableFetch2"



const ReactionFunction2 = async (props) => {
    //const [state, changeState] = useState("default value")
//on click event we fire this function with the knowledge of exact id value, in Reactoin2 component

const [state, changeState] = useState(props.reactionValue)
const headers = {

      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTcyLCJuYW1lIjoiSm9oYW4iLCJlbWFpbCI6IkpvaEtqZTUyNTU0QHN0dWQubm9yb2ZmLm5vIiwiYXZhdGFyIjoiaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzLzEwLzkxLzk0LzEwOTE5NDhjNmI4MGI2NWI5ZWVmOGMxNjNmMGFlNDJhLmpwZyIsImJhbm5lciI6bnVsbCwiaWF0IjoxNjc1NjA2NjQwfQ.7MNKglEvnbdBs9fT6FkogF2u-8HTuScNGHgxESFU7IU',
       

      
  }; 

  const requestBody =JSON.stringify( {
    "symbol": "😌",
    "count": + 5, 
    "postId": 0
  })
  



  const reactionPutRequest =async () => {
  

    let fetchedData=  await RecyclableFetch2("/social/posts/" + props.idValue+ "/react/❤️", "PUT", requestBody)


    changeState(fetchedData)



  }
 //console.log( await RecyclableFetch2("/social/posts/" + idValue + "/react/❤️", "PUT", headers))




 //https://api.noroff.dev/api/v1/social/posts/2740/react/%F0%9F%98%8C







 return <div onClick={reactionPutRequest}>gggg</div>


}




export default ReactionFunction2