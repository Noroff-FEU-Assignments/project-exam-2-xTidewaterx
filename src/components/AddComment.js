import {  useState } from "react"

import RecyclableFetch2 from "./RecyclableFetch2";


const AddComment = (props) => {
const [state, changeState] = useState(null)
const [newReply, setNewReply] = useState("")


const targetComment = (e) => {

const currentComment = e.currentTarget.value;



changeState(currentComment)
setNewReply(currentComment)

}




const requestBody = JSON.stringify( {

    "body": state,
    "replyToId": props.replyId
 
})





const postComment = async() => {
    console.log( document.getElementById("reply-textarea").value)

    setNewReply("")
 
await RecyclableFetch2("/social/posts/" + props.idValue + "/comment", "POST", requestBody)  
    
    props.changeImportState(!props.importState)


}


return<div className="comment-input-container mb-5"><textarea id="reply-textarea" value={newReply} onChange={targetComment} />  <button onClick={postComment}>{props.indentation}</button> </div> 
}
export default AddComment


