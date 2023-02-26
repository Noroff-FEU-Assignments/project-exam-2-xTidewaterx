import { useEffect, useState } from "react"

//our current problem is that or else if does nothing when the array checked is undefined, when nothing is added to its barriers, add another if else
//we must have a state that we return through our function, if state change return correct state value, update 


import ReactionFunction from "./ReactionFunction"
import ReactionFunction2 from "./ReactionFunction2"
import ReactionState from "./ReactionState"
import RecyclableFetch2 from "./RecyclableFetch2"






const Reaction = (props) => {
//this individual, one ach iteration, we take props value from index array


const [valueReaction, setValueReaction] = useState(props.reactionValue)
const [updatedValueReaction, setUpdatedValueReaction] = useState(0) //if heart exists we change state to the heart value setting
const [matchedReactionValue, changeMatchedReactionValue] = useState(0)
const [reactionNumber, changeReactionNumber] = useState(props.currentReaction)
const [booleanState, changeBooleanState] = useState(false)
const [reactionState, setReactionState] = useState(false)

useEffect(() => {


//if there is our props reaction value


if(valueReaction[0]?.symbol) {


 valueReaction.map((item) => {

  


    if(item.symbol == "❤️") {
        //console.log(item)

       // console.log(item.symbol[0] + item.count + "if array value exists, check if heart, then return match, all states together")
   setUpdatedValueReaction(item.count) //since we only return heart symbol only avilable count will be associated with that
   
   
    }
 })
    
}

//we now have function ahppening at higher level giving us clearance all before anything
//array values iterated through array index level
//now state is figured before anything, so0 in state instead of satte a ina addition to superflous code

//extar leveleing, top levle heirachy top level command



}

  //  console.log(valueReaction)




, [props.reactionValue.count])





const requestBody =JSON.stringify( {
  "symbol": "",
  "count": "", 
  "postId": ""
})







//on each reander of dom, each state change renders dom, we render dom for request, we render dom for like, for update database, all database
    const awaitData = () => {


  //ReactionFunction(props.idValue)




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

        awaitData()  //we create all interactions engasgements from top level intel, now we have array iteration and double check from linear inline state and also online state to verify completely, all from top state
 
      
}
     //   ReactionFunctionHolder()
  
     else {

        console.log("error, profile already liked, dislike has occoured, ooh, why so negative")
        setUpdatedValueReaction(updatedValueReaction - 1)
    }
    
    changeBooleanState(!booleanState)
    }

//does value set now change globally throuygh same incentive and do we have collectible mutual state acrooss comlicance levels all powers

//we are sourrounding the value sets, there is a broad net catching all values, then wwe apply the same if else condition, and then all will be included be
//because default values exist any without begin at the intiial default value, now we create the eco for any value to be included from iteration
//we have filter eve
//must have single check and avoid breaking code if undefined

const ternaryEmoji = booleanState ? "❤️" :"🖤"

return <div className={"emoji-reaction-container"} onClick={awaitData}><div className="p-3 symbol symbol-reaction"> {ternaryEmoji} <div >{updatedValueReaction}</div></div> </div>




}


export default Reaction


