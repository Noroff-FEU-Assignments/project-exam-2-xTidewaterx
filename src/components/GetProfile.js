
import { useState } from "react"
import RecyclableFetch from "./RecyclableFetch"



const GetProfile = (props) => {

const [state, changeState] = useState("default value")
const [state2, changeState2] = useState("default value")
    const awaitData = async () => {

console.log(props.idValue)
 
let awaitData = "data yet to arrive";
 awaitData = (await (RecyclableFetch("/social/posts/"+ props.idValue +"?_author=true&_comments=true&_reactions=true")))
   


  if(awaitData != "data yet to arrive")  {


  console.log(awaitData)
  console.log(awaitData.author.name)
  changeState(awaitData.author.name);




}else {

    console.log("default state")
}

}




return <h4>await profile info <button onClick={awaitData}>Get author, single event, state: {state} </button></h4>


}


export default GetProfile