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

//my profile will be a list of all posts you have posted, a repeat of allposts, except, now it is only those that match a certain name
//this is profile with valukes, other than that, sam e get request ,apply same codce with this new request as value iterate value same

//all edit is good, 


const MyProfile2 = () => {

  
const {currentUser} = useParams();
const [state, changeState] = useState(null)
const [avatarState, changeAvatarState] = useState(currentAvatar)

const [textState, changeTextState] = useState("default")




useEffect(()=> {


console.log("useffect in action")
const MapSpecificPosts = async () => {

//we want state to become our data, because state react well with dom, and can be acsessed by all component, outside of async
//changeState(RecyclableFetch("/social/posts"))
changeState()
changeState(await RecyclableFetch("/social/profiles/" + currentUser + "/posts?_author=true&_comments=true&_reactions=true"))


}


MapSpecificPosts()


//value dependant on change of specific element, same component, different attributes, different selctors and new states, value spin

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

//console.log(e)
            changeTextState(e)
          
          
          //  console.log(e)
          
            //then do post request with this state, we can have many state, all go together in one function taht fires on an event
          
          
            //sinlge event to send 4 astates, each state is saved temporarily
           
          } //index immediate all values come together ,a  at base level string iteration index post request async function all elements
          
          const DeletePosts = async() => {



DeletePost(item.id)




}





          function logStringValue(e) {
            var postTitle2 = document.getElementsByClassName("postTitle")[index];
            var postBody = document.getElementsByClassName("postBody")[index].innerHTML;
            var postTags =  document.getElementsByClassName("postTags")[index].innerHTML;
         //   var postMedia =  document.getElementsByClassName("edit-image-value")[index].innerHTML; //boolean image some
           var postMedia2 = document.getElementsByClassName("edit-image-value")[index];
          // var postMedia3 = document.getElementsByClassName("edit-image-value")[index].innerHTML;
           var postMediaText = document.getElementsByClassName("image-edit-container")[index];
           var postMediaText2Image = document.getElementsByClassName("image" + item.id + "edit");
           var postMediaText2Title = document.getElementsByClassName("title" + item.id + "edit");
           var profileImage = document.getElementsByClassName("edit-avatar");
         
    
const postTitle =document.getElementsByClassName("title" + item.id + "edit")[0].textContent;

//if postmediatext2
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

//regex similarities find value of instant element from outside, we have value and find url for true

//console.log(postMediaText2[0].textContent) //if no change to image we return null, we only update image if text value saved

//problem is, even when we change value of text input, we have the same class
//we must differentiate between .id and using text value
//we changed values and provided if default

const trueIfEdit = postMediaText2Image[0].textContent;

const ternaryImage = trueIfEdit == "Add Image Here" ? "" : trueIfEdit;


const requestBody = JSON.stringify({
  "title": postTitle,
  "body": postBody,
  "tags": [postTags],
  "media": trueIfEdit != "Add Image Here" ?   imgurl : ternaryImage,
})


console.log(postMediaText2Image)


const currentId = item.id; //communicates with iteration from within map and same values



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
//what does post consists of, need all those values


   

       
  
            console.log("Hhhhhhh")
            console.log("Hhhhhhh")
      
            console.log("Hhhhhhh")
             
 
              changeTextState("textState")

        
            console.log(textState)
            
        
      
    
          }
          //just update state of mapposts on change, function is::logstringValue

//dependant individual edit state for differentvalu different values different values, edit new elemnt and decided initial entry
//all edits are through, we have text to be changed, all default precautions , values are in object accepted enepodint recyclable fetch
//all value image and value from post are now created, specific post are all, else less and dynamic route

//value input state problem, there are values that are too far, we have reach problem


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






 
//<InlineEdit text={item.API} onSetText={OnSetText}  item={item.API}  /> 
//we have different versions, there is now a need for the correct valuees, have it within the mapp
        










