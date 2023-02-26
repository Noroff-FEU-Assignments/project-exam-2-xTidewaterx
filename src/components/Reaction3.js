//copy of reactoin 2 before additions when it was only specificed iteration to represent each elemtn in array per iteration::



import { useEffect, useState } from "react"

//our current problem is that or else if does nothing when the array checked is undefined, when nothing is added to its barriers, add another if else










const Reaction = (props) => {

    const [matchedReactionValue, changeMatchedReactionValue] = useState(0)

props.reactionValue.map((item)=> {

if(item.symbol== "❤️") {

   let matchedReactionValue = item.count;


  //console.log(item.count + item.symbol)


} else { } 



})




    //    props.reactionValue.symbol + " " + props.reactionValue.count);

    const [reactionValue, changeReactionValue] = useState("default state value")
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    

    const [currentReaction, changecurrentReaction] = useState(null);


//we must take reactionValue from a state 




const awaitData = () => {


console.log(props.reactionValue)


console.log(props.reactionValue.symbol)

let arrayValue = props.reactionValue;
console.log(arrayValue);






}




//we are sourrounding the value sets, there is a broad net catching all values, then wwe apply the same if else condition, and then all will be included be
//because default values exist any without begin at the intiial default value, now we create the eco for any value to be included from iteration
//we have filter eve
//must have single check and avoid breaking code if undefined


{if(props.reactionValue[0]?.symbol) {

    console.log("value returned, reaction array historic is green")
    console.log(props.reactionValue[0].symbol=== "❤️")

if(props.reactionValue[0].symbol === "❤️") {

    console.log(props.reactionValue[0].count + props.reactionValue[0].symbol)

    return <div>{props.reactionValue[0].count}  { props.reactionValue[0].symbol}</div>
}
    return <div>0 ❤️</div>
} else { 

    console.log("without value return")

    return <div>0 ❤️</div>
}}





    return <div className="reactionValue"><button onClick={awaitData}>React</button>ReactionValue::
    
    
    

    
    
    
    
    
    
    
    
    
    </div>










}


export default Reaction


