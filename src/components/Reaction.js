import { useEffect, useState } from "react"
import RecyclableFetch from "./RecyclableFetch"

const Reaction =(props) => {


//number value is fetched,, have two states perhaps, then we can use items from global state, like number of likes
//we utilise only our special emojii

const requestBody =JSON.stringify( {
  "symbol": "😌",
  "count": + 5, 
  "postId": 0
})


const [state, changeState] = useState(null); //
const [state2, changeState2] = useState(null); //
const [reactionValue, changeReactionValue] = useState(0); //

const ReactionRequest =async () => {

console.log(await RecyclableFetch("/social/posts/" + props.idValue+ "/react",)) 
//this value logs, but why doesnt it log an increase in value
console.log(await RecyclableFetch("/social/posts/" + props.idValue+ "/react",)) 
console.log(await RecyclableFetch("/social/posts/" + props.idValue+ "/react",)) 

const correctReactionValue =await RecyclableFetch("/social/posts/" + props.idValue+ "/react/😌",)

console.log(await RecyclableFetch("/social/posts/" + props.idValue+ "/react/😌",))
   changeState(  await RecyclableFetch("/social/posts/" + props.idValue+ "/react/😌", "PUT", requestBody))
     //const awaitData =      RecyclableFetch("/social/posts/" + props.idValue+ "/react/😌", "PUT", requestBody);

console.log()
    
}





useEffect(()=> {

//problem, this goes off on first load


if(state!= null) {

  //we have now made it so certain values are only returned with our fetch request return, because stat4e changes simultanously as our await request is returned
  //await request is now matched with our useffect function, we invoke data values when we have values, and props into another value function we all await, and props are awaited now

console.log(state)

console.log(state)
console.log(state)

const updatedReactionValue =async () => {

  changeState2(await RecyclableFetch("/social/posts"))

}

updatedReactionValue()


//changeReactionValue(state2) //now we have it so our state waits for another state, allowing us to update only when a certain value is changed 
//we have automatic await, as state changes to a value undergoing await, now with this we have our dom update, we must have it be accordign to 
//we must secure area for synced values, value can be logged by fetch
} else {

  console.log("inital render has state null, therefore we only change value sets when correct return is fetched")
}

},[state])





useEffect(()=> {


if(state2!= null) {
console.log(state2)

console.log(state2)

console.log(state2)

const currentIndex = props.currentIndex; //have i loop with inex, when we then click, we can have props be the index, and we get updated index value from array

console.log(state2[currentIndex])
  
//return item that matches currentid
console.log(props.idValue)


changeReactionValue(state2[currentIndex]._count.reactions)


console.log(state2[currentIndex]._count.reactions) //we return a value, right after state has returned/ beceome the return value, this is dependant on
}
  },[state2])
  

//log normal state, it has an immediate, we are with that rythm, values is asked to reiterate

//console.log("hhh")

//console.log(state)//state is yet to become anything
return <button onClick={ReactionRequest}>😌 {props.reactionValue} stateValue: {props.reactionValue} </button>


}


export default Reaction
