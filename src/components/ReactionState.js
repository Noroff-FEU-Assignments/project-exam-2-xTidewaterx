import { useState } from "react";



const ReactionState = (props) => {


    const [state, changeState] = useState(props.reactionValue);


//log value of state and be able to have one state for each return and add state, then later we can have another chagnestate with useffect
//if something then change state to something
//statevalue that only becomes true if original state changes, and then it is async and await a value, wehen this vlaue changees it takes over ternary variable
//all we need now is something to bring in an async value and change state asynchronously
//now we have data value as state, component that takes values from outside its vicinity , 
//take props vvalues, create a state that react within the areaa of another component, light code, take and change according we know pattern of dtabase, after normal have database verification

//all values match , on successfuulll ewe have same values, state has pattern of database on each event they become the same props database value
//if any error, regar, without dopubt on all load they match because they are same soruced, valeu are from database digital,. on each iteration
//all vlaues are from database
    return <div>ReactionValue::<div onClick={ () => changeState(state + 1)}> {state} ❤️</div>  </div>







}



export default ReactionState