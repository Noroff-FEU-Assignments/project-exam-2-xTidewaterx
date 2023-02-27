import { useEffect, useState } from "react"
import RecyclableFetch from "./RecyclableFetch"

import InlineEdit from "../Edit/Edit"
import RecyclableFetch2 from "./RecyclableFetch2"
import { useParams } from "react-router-dom"
import DeletePost from "../Edit/DeletePost"
import EditProfile from "./utility/profileData/EditProfile"
import Reaction from "./Reaction2"
import { currentAvatar } from "../variables/Variables"
import { Spinner } from "react-bootstrap"




const MyProfile2 = () => {

  
const {currentUser} = useParams();
const [state, changeState] = useState(null)
const [avatarState, changeAvatarState] = useState(currentAvatar)

const [textState, changeTextState] = useState("default")




useEffect(()=> {


console.log("useffect in action")
const MapSpecificPosts = async () => {

changeState()
changeState(await RecyclableFetch("/social/profiles/" + currentUser + "/posts?_author=true&_comments=true&_reactions=true"))


}


MapSpecificPosts()



},[textState, MyProfile2])  
function EditProfileFunction () {


var profileAvatar = document.getElementsByClassName("edit-avatar");
var profileBanner = document.getElementsByClassName("edit-banner");

const avatarValue = profileAvatar[0].textContent? profileAvatar[0].textContent : state[0].author.avatar;
localStorage.setItem("currentAvatar", avatarValue)
changeAvatarState(avatarValue)


const requestBodyAvatarBanner = JSON.stringify({
  "banner": profileBanner[0].textContent? profileBanner[0].textContent : state[0].author.banner,
  "avatar": profileAvatar[0].textContent? profileAvatar[0].textContent : state[0].author.avatar,
}
)
changeTextState("editProfileFunction")


  var profileAvatar = document.getElementsByClassName("edit-avatar");
  var profileBanner = document.getElementsByClassName("edit-banner");
  console.log(profileBanner)
  console.log(profileBanner)
console.log(profileAvatar[0].textContent)

  EditProfile(requestBodyAvatarBanner)
}

if(state != null) {

    console.log("async state has returned, value has changed, state is linked throughout entire component, now state responds")

console.log(state)
console.log(state[0].body)

    return <div className="edit-profile">
    
   <div className="edit-profile-banner-avatar"><div className={"edit-avatar-value"}><InlineEdit className="postTitle" text= {state[0].author.name}  onSetText= "OnSetText" item={""}/> </div>
  <p className="info-text banner-avatar">Banner, Avatar, Posts, click to edit</p>
   <InlineEdit className= "edit-banner" text= {state[0].author.banner}  item={<img src={state[0].author.banner}/>}/>

    <InlineEdit className= "edit-avatar" text= {state[0].author.avatar}  onSetText= "OnSetText" item={<img src={avatarState}/>}/>

<button className="p-2 edit-save-confirm" onClick={ EditProfileFunction}>Save changes</button>


 <div>
 </div>

 <h3 className="m-5">My Posts</h3>
</div> 
    
     {state.map((item, index) => {

        
        function OnSetText (e) {

            changeTextState(e)
          
          
          
          
          
           
          } 
          
          const DeletePosts = async() => {



DeletePost(item.id)




}





          function logStringValue(e) {
            var postTitle2 = document.getElementsByClassName("postTitle")[index];
            var postBody = document.getElementsByClassName("postBody")[index].innerHTML;
            var postTags =  document.getElementsByClassName("postTags")[index].innerHTML;
           var postMedia2 = document.getElementsByClassName("edit-image-value")[index];
           var postMediaText = document.getElementsByClassName("image-edit-container")[index];
           var postMediaText2Image = document.getElementsByClassName("image" + item.id + "edit");
           var postMediaText2Title = document.getElementsByClassName("title" + item.id + "edit");
           var profileImage = document.getElementsByClassName("edit-avatar");
         
    
const postTitle =document.getElementsByClassName("title" + item.id + "edit")[0].textContent;


console.log(postMediaText)
var imgurl;

const valueToTest = postMediaText.innerHTML;
console.log(valueToTest)
var regex = (/(https?:\/\/[^ ]*\.(?:gif|png|jpg|jpeg))/i);

if(new RegExp(regex).test(valueToTest)) {

  imgurl = regex.exec(valueToTest)[1];
  console.log(imgurl)
}



console.log(imgurl)



const trueIfEdit = postMediaText2Image[0].textContent;

const ternaryImage = trueIfEdit == "Add Image Here" ? "" : trueIfEdit;


const requestBody = JSON.stringify({
  "title": postTitle,
  "body": postBody,
  "tags": [postTags],
  "media": trueIfEdit != "Add Image Here" ?   imgurl : ternaryImage,
})


console.log(postMediaText2Image)


const currentId = item.id; 



async function changeInputDatabase () {

 const database= await RecyclableFetch2("/social/posts/" + currentId, "PUT", requestBody)
console.log(await database)

if(database.created) {

  changeTextState("new state database")
  console.log(textState)

}

}

changeInputDatabase()

console.log(item.id)



   

       
  
            console.log("Hhhhhhh")
            console.log("Hhhhhhh")
      
            console.log("Hhhhhhh")
             
 
              changeTextState("textState")

        
            console.log(textState)
            
        
      
    
          }
       


        return <div className="card my-page-container" key={item.id}>
        <div className="p-4 edit-post-container image-edit-container border-bottom border-4">  <InlineEdit className="postMedia" id ={ "image" + item.id} text= {item.media }  item=  {item.media ?   <img className="edit-image-value" id={item.media} src={item.media}/> : "Add Image Here" }   /></div> 

      
        <div className="container d-flexbox align-items-center justify-content-center mb-5 " id={ "post" + item.id}>

       <h2><InlineEdit className="p-4 edit-post-container postTitle border-bottom border-4" text= {item.title} id={"title" + item.id}   item={item.title}/> </h2>
     
       <InlineEdit className="p-4 edit-post-container postBody border-bottom border-4" text= {item.body}  item={item.body}/> 
       <InlineEdit className="p-4 edit-post-container postTags border-bottom border-4" text= {item.tags}   item={"no tags"}/>

 
      <p>   <Reaction reactionValue= {item.reactions} reactionValues= {state} idValue={item.id}  /></p>
     
        <button className="btn saveChanges" onClick={logStringValue}>Save Changes</button>
        <button className="btn delete" onClick={DeletePosts}>Delete Post</button>
        


        
        
        </div> </div>
    }) }

</div>
} else {


return <div>  <Spinner className="spinner-symbol" style={{width:"80px", height: "80px"}} animation="border" variant="secondary" /></div>
}

}
export default MyProfile2













