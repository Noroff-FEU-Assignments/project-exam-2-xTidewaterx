import {useState} from "react";

const ShowMoreLess = (props) => {



const [showMore, setShowMore] = useState(false);


const ternary = !showMore? <p className="text-muted">Show More</p> : <p className="text-muted">Show Less</p>;


//if something we toggle we change value on interaction

//console.log(props.stringValue) 
if(props.stringValue.length >5) {
    return   <p className="comment-section">
        {showMore ? props.stringValue : `${props.stringValue.substring(0, 5)}`}
        <button className="btn" onClick={() => setShowMore(!showMore)}>{ternary} </button>
    </p>
} else {

    return <p>{props.stringValue}</p>
}

}


export default ShowMoreLess


//implement this component in a mapping function where stringvalue param becomes the element from the mapped array