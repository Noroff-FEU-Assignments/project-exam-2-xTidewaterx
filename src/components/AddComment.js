import { useEffect, useState } from "react"
import MapPosts from "./MapPosts";
import RecyclableFetch from "./RecyclableFetch";
import RecyclableFetch2 from "./RecyclableFetch2";

//endpoint, comment on post::: POST /api/v1/social/posts/<id>/comment

//this addcomment would need one prop that is current id, that is it, a default replytoid that is null, but wehn clicking button from a comment, it does the same except this one adds commentreply thing as well, only comment button changes that prop
//so we cna have same commentcomponent, however it is different for comment and post comment, if replytoid, then that acticualty changes the comment, with post comment its value is nothing on replyid, only post id normal
const AddComment = (props) => {
const [state, changeState] = useState(null)

console.log(props.importState)
console.log(props.importState)
console.log(props.importState)
console.log(props.importState)

const targetComment = (e) => {

const currentComment = e.currentTarget.value;
//console.log(state)

changeState(currentComment)

}




const requestBody = JSON.stringify( {

    "body": state,
    "replyToId": props.replyId
 
})


//idValue= 2601; //default param value, overwritten if, now we have opening to be changed and have specific have placed in normal string value with addition
//idValue = "2958";
//comment already

//2598 id  //we now have props id, fill in on each event we have the exact info, to precisely

const postComment = async() => {



//props.stateValue

//importing state from parent, then calling with object syntax, callback and useefefect ot have ocmmunication outside of scope array value

//if problem jsut change back to iteration branch git
await RecyclableFetch2("/social/posts/" + props.idValue + "/comment", "POST", requestBody)  //this was changed from console.log
    
    props.changeImportState(!props.importState) //we have updated parent state with imported callback props value as proppsss
//update this::: <MapPosts endpoint="/social/posts/following"/>
//console.log(state + "is state changing, importState after change : " + props.importState)

}


return<div className="comment-input-container mb-5"><textarea onChange={targetComment} />  <button onClick={postComment}>{props.indentation}</button> </div> 
}
export default AddComment



//i put // on the aaw