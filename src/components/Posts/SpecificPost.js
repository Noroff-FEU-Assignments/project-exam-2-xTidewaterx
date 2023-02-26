import { useEffect } from "react";
import RecyclableFetch2 from "../RecyclableFetch2";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CommentSection from "../utility/CommentSection";
import AddComment from "../AddComment";

function SpecificPost (props) {

const [state, setState] = useState(null)

const [importState, changeImportState] = useState(null)

const {id} = useParams(); //we call this in the responsible component, link is here, on redner we have route lement render, browserrouter links this to our render, we now have connection






useEffect(() => {



    const awaitData = async() =>{

        setState(await RecyclableFetch2("/social/posts/" + id + "?_author=true&_comments=true&_reactions=true"))
       


    }
awaitData()

}, [importState])




//400 error if image is not soemthing, ahve that check on image a check that goes throuhg input image and if this response 400 have default


if(state !=null) {
console.log(state.statusCode)
console.log(state._count)

    return <div className="mt-5 card card-specific-post" style= {{width:"100%", height: "100%"}}>   <img class="card-img-top" src={state.media} alt=""/><div className="card-body">
    <h3>{state.title}</h3>
   <p className="card-text">{state.body}</p>
     <div className="row pt-5">
   
     <div className="commentsection-specificpost-container" id="specificpost">   <div className="comments p-5 mb-5">  <CommentSection commentValue = {state.comments} /></div></div>
        <div className="comment-section-container pt-4"> <AddComment  idValue={state.id} indentation={"Comment"} importState={importState} changeImportState={changeImportState} /></div> 
        <div className="col-sm-4"></div>
        <div className="col-sm-4"></div>
        <div className="col-sm-4">Post by <b><Link to={"/profiles/" + state.author.name}>{state.author.name}</Link></b></div>
     </div>
   </div></div>

//include compoennt to package the only object in array, have all values as opposed to the list with all immediate

        
    } else {


        return <div>...Loading</div>
    }



    
}







export default SpecificPost