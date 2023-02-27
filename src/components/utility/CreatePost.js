
import { useEffect, useState } from "react"
import RecyclableFetch2 from "../RecyclableFetch2";

//it is clear how simple this all is, I have elveraged json object with curly braces and use both id and classname to have the shortes code possible, all is so fluent and all has bee ntested now, 5 more clears and all is good, state mothership
//top info intel, on path have component with mothership props value top level intel all same source
//all info sourced from mothership, aquired all values from top level, then safe and indivdual hatches waterproof filter arrays match


const CreatePost = (props) => {


const [post, setPost] = useState([{"title": ""}, {"body": ""}, {"tags": ""}, {"media": ""}])

const [requestBody, setRequestBody]  = useState(null)
const [createPostState, changeCreatePostState] = useState(false);


function displayPost() {


 

}


const logInputValue = (e)  => {

const currentTargetValue = e.currentTarget.value;
var currentTargetId = e.currentTarget.id;
const currentClassname = e.currentTarget.className;



const postArray = post.splice(currentTargetId, 1, {[currentClassname]: currentTargetValue })



const newArray = post;

setPost(newArray)

const tagsTernary = post[2].tags.length > 1 ? "tags" : "null";
const mediaTernary = post[3].media.length > 1 ? "media" : "null";







setRequestBody(JSON.stringify ( {

    "title":  post[0].title,
    "body": post[1].body,
    [tagsTernary]: [post[2].tags],
    [mediaTernary] : post[3].media,

}
))












}



useEffect(() => {



console.log("state changes")



}, )









const ternaryBlockOrNone = !createPostState ? "Make Post" : "Hide 'Make Post'"











//have other be true or falsy depending on input value, more thna one 

//value top state, change database value update on state change adpot adpot array multiple acrross asynchronous

console.log(requestBody)
const PostFunction =async () => {



RecyclableFetch2("/social/posts", "POST", requestBody)

props.changeImportState(!props.importState)
}

//value of parent component, state props, state changer into on event and then backlog and update props because value of post on correct component is mothership all values



    return (
    
        <div >
        <div className="border-post-container">

    <div className="post post-container" style= {{display:createPostState ? "block" : "none" }} >

    <input onChange={logInputValue} className="title" placeholder={"title"}  id= {0}></input> 
    <textarea onChange={logInputValue} className="body" placeholder={"body"} id= {1}></textarea>
    <input onChange={logInputValue} className="tags" placeholder={"tags"} id= {2}></input>
    <input onChange={logInputValue} className="media" placeholder={"media"}  id= {3}></input>


    <button onClick={PostFunction}>Post</button>
    </div>
    <button className="display-post-container" onClick={() => changeCreatePostState(!createPostState)}>  {ternaryBlockOrNone}</button> </div> </div>)
}


export default CreatePost