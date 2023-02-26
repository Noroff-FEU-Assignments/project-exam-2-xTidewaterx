import { useState } from "react"

import RecyclableFetch2 from "./RecyclableFetch2"



const ReactionFunction = async (idValue) => {
    //const [state, changeState] = useState("default value")
//on click event we fire this function with the knowledge of exact id value, in Reactoin2 component
const [booleanState, setBooleanState] =useState(false)






  const requestBody =JSON.stringify( {
    "symbol": "",
    "count": "", 
    "postId": ""
  })
  


  console.log(idValue)
  console.log(idValue)
  console.log(idValue)
 //console.log( await RecyclableFetch2("/social/posts/" + idValue + "/react/❤️", "PUT", headers))

 console.log(booleanState)
 console.log(booleanState)
 console.log(booleanState)
 console.log(booleanState)
 if(booleanState == true) {console.log("post is already liked")} else {

  const fetchedData = await RecyclableFetch2("/social/posts/" + idValue+ "/react/❤️", "PUT", requestBody)
 

  console.log(fetchedData)

 }


setBooleanState(!booleanState)

 //https://api.noroff.dev/api/v1/social/posts/2740/react/%F0%9F%98%8C




}




export default ReactionFunction