import ShowMoreLess from "./ShowMoreLess";
import AddComment from "../AddComment";
//we create components that take props, they cvan be anywhere and changing them is super easy, motehrship ahs all intel and we have componentys that are just empty shells, change top level and all information is distributed differently, we are not addicted to a bunch of things, only top level motherboard









const CommentSection = (props) => {


console.log(props.importState)
console.log(props.importState)
console.log(props.importState)








//if index value is iterable, meaning any value exists in array, then comment exists, we only provide mepty message when void is present
//here we have the value, because array returns always, now we go deeper to find out if any value exists,
//now ternary find true or false this conclusion and all is returned outside of map
//default message outyside of iteration ,all comments connected to post , psot array endpoint , and curly braces
const commentArray = props.commentValue;

const ternaryComment = props.commentValue[0]?.author? "" : <p className= "fw-light p-3">Very empty, perhaps you should comment something</p>


    return <div> {ternaryComment}
    
    { commentArray.map((item) => {
    

        if(!item.body[0]) {
        
        } else {

 //now returning comments if value exist, author and, we can add limit to index number map, we go through comments if they are, otherwise return no comments and comment option, we then update all useffect on return request we do a request to add comments
        return  <div className="comment-section-container "> <img src={item.author.avatar}/>{item.author.name} <div>

        </div><div className="mt-4 border-bottom border-secondary"><ShowMoreLess stringValue= {item.body}/></div>
         <div className="replyComment">
         <AddComment idValue={item.postId} replyId={item.id} indentation={"Reply"} importState={props.importState} changeImportState={props.changeImportState}/> </div></div>
    }})} </div>

}
export default  CommentSection




//src={item.author.avatar}/