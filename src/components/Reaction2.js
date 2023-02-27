import { useEffect, useState } from "react"




import RecyclableFetch2 from "./RecyclableFetch2"






const Reaction = (props) => {


const [valueReaction, setValueReaction] = useState(props.reactionValue)
const [updatedValueReaction, setUpdatedValueReaction] = useState(0) 
const [matchedReactionValue, changeMatchedReactionValue] = useState(0)
const [reactionNumber, changeReactionNumber] = useState(props.currentReaction)
const [booleanState, changeBooleanState] = useState(false)
const [reactionState, setReactionState] = useState(false)

useEffect(() => {





if(valueReaction[0]?.symbol) {


 valueReaction.map((item) => {

  


    if(item.symbol == "❤️") {

   setUpdatedValueReaction(item.count) 
   
   
    }
 })
    
}





}






, [props.reactionValue.count])





const requestBody =JSON.stringify( {
  "symbol": "",
  "count": "", 
  "postId": ""
})







    const awaitData = () => {






if(booleanState == false) {
        setUpdatedValueReaction(updatedValueReaction + 1)

        const awaitData = async() => {


          let fetchedData = null;
          

          if(reactionState == false) {
           fetchedData = await RecyclableFetch2("/social/posts/" + props.idValue + "/react/❤️", "PUT", requestBody)
    setReactionState(true)
          }

           if(fetchedData!= null) {

            setUpdatedValueReaction(fetchedData.count)
            console.log(fetchedData.count)
           }
          

        }

        awaitData()  
 
      
}
    
  
     else {

        console.log("error, profile already liked, dislike has occoured, ooh, why so negative")
        setUpdatedValueReaction(updatedValueReaction - 1)
    }
    
    changeBooleanState(!booleanState)
    }



const ternaryEmoji = booleanState ? "❤️" :"🖤"

return <div className={"emoji-reaction-container"} onClick={awaitData}><div className="p-3 symbol symbol-reaction"> {ternaryEmoji} <div >{updatedValueReaction}</div></div> </div>




}


export default Reaction


