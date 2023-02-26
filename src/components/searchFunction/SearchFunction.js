import MapPosts from "../MapPosts";
import RecyclableFetch2 from "../RecyclableFetch2";
import Select from 'react-select'
import { Link } from "react-router-dom";
const { useState, useEffect } = require("react")

const options = [
  { value: 'id', label: 'id' },
  { value: 'title', label: 'title' },
  { value: 'profile', label: 'profile' }
]

 //could it be these values



function getSelectValue (e) {

    console.log(document.getElementsByClassName('select')[0].value)

    console.log(e.currentTarget.value)

}


function SearchFunction () {

const [state, changeState] = useState(null);
const [returnedSearch, setReturnedSearch] = useState(null);
const [searchReturn, setSearchReturn] = useState([])
const [errorMessage, setErrorMessage] = useState(null)
const [selectErrorMessage, setSelectErrorMessage] = useState(null)
const currentSearchValue = "Zebras"
const polishedSearchValue = currentSearchValue.replace(/\s+/g, ' ').trim(); //should we have no whitespaces
const [selectState, setSelectState] = useState(null)
const [searchInputValue,changeSearchInputValue] = useState(null)
const [getProfiles, setGetProfiles] = useState(null)


console.log(getProfiles)
console.log(getProfiles)
console.log(getProfiles)

useEffect(() => {


const awaitData =  async() => {

    changeState( await RecyclableFetch2("/social/posts"))
   setGetProfiles( await RecyclableFetch2("/social/profiles"))
 

}
awaitData()

},[]) 


//create search functionality, global state, have different arguments reach conlusions synchronously 

//async data extra into normal state, state async we have global reach

//console.log(document.getElementsByClassName('select')[0])

function SearchFunction (param) {

    const currentSearchValue = searchInputValue;
    let matchedSearchArray = []
    setSearchReturn([])
    param = selectState;

//state remembers, we use state for value

    if (selectState == null) {setSelectErrorMessage("select what you want to search for")} 



if(param == "profile") {
    console.log("param is selected")

    getProfiles.map((item) => {


if(item.name == currentSearchValue) {

    console.log(item.title)
    const newArray = matchedSearchArray.push(item);
     setSearchReturn(matchedSearchArray)
    console.log(newArray)
    setErrorMessage("")

}

    })


} else {


//have error message of failed select value be ogne onchange of select value as any cahgne must be the selction of isloated values from array
//we only need the onchange from select, because any onchange is synchronus with === value selected, beautiful

//all values, ibnary and towards tthe same, we have aerodynamics, values retunred even if and all different values
//precise ultimate instant
    //2941 value from input, then change depending on value endpoint

console.log(currentSearchValue)
state.map((item)=> {

     param = selectState.toString(2);
 
 
//   if(item[param] == currentSearchValue) {
 // || item[param]?.includes(currentSearchValue)  //ffor another less precise but broader term value

//concealed, have undestandable format to intrude
   if([param]=="id" || [param]=="title" ) {

if( item[param].toString().includes(currentSearchValue)   || item[param] == currentSearchValue)  {
    

console.log([param]=="id" )

        console.log(item.title)

        console.log(param)   
          console.log(param)     
          console.log(param)


        const newArray = matchedSearchArray.push(item);
         setSearchReturn(matchedSearchArray)
        console.log(newArray)
        setErrorMessage("")
    } 

   } 



   






}) } 



if([param] == "profile") {

    console.log([param])

    console.log([param])
    console.log([param])

console.log(getProfiles)


    getProfiles.map((item)=> {

        param = selectState.toString(2);
        console.log(param)
   //   if(item[param] == currentSearchValue) {
    // || item[param]?.includes(currentSearchValue)  //ffor another less precise but broader term value
   
   //concealed, have undestandable format to intrude
 //different array, we search through posts vs profiles, id and posts, id is currently on posts, 
 //have it check both arrays in one 
   
   if( item.name.toString().toLowerCase().includes(currentSearchValue.toLowerCase())   || item.name.toLowerCase() == currentSearchValue.toLowerCase())  {
       
   
   console.log([param]=="id" )
   
           console.log(item.title)
   
           console.log(param)   
             console.log(param)     
             console.log(param)
   
   
           const newArray = matchedSearchArray.push(item);
            setSearchReturn(matchedSearchArray)
           console.log(newArray)
           setErrorMessage("")
       } 
   
      
   
   
   
      
   
   
   
   
   
   
   })


    
}

//we have made all the valuwees , and on load values are resynergized, we have all
//synergy

//now correct amtch ahs all the correct map all mmatched valuessss
//firing problem, we need to await to ensure that values are correct
//synergized global values then map, we have check for this value there is we find matches into array for instant load, then we map only the value s given on match form a  map fucntion
//map method, each element
if(matchedSearchArray == []) {

    console.log(searchReturn.length)
    console.log("problem error")
    setErrorMessage("Sorry, no matches were found, query problem")

    //change state to the error of no matches found
}




}

//because we set value to null we have a loop, on null we fire error message

//all values outlook, now there is , instant request on load and state takes global instantanous values 
//we have instant because background async await for the actions delayed decay
//array empty nothing

const ternary = searchReturn[0]?.title ?    searchReturn.map((item) => {return <div className="p-4 search-item-container"><Link to={"/posts/" + item.id}>{item.title}</Link>  </div>}):   searchReturn.map((item) => {return <div className="p-4 search-item-container"><Link to={"/profiles/" + item.name }>{item.name}</Link>  </div>});

//have value that is only present on the event of returning nothing 


console.log(ternary);
console.log(searchReturn)


//we have matches returned, with values, now state is changed into these valuues, either return state or, we push state for each
//push appends another valeu to state data value object format index values  organised , organize, compose top strcuture gra turbulence 


//we have match for match, however we are outside the scope problem of map iteration endless loop, there is now global stoic value for transport
//value sets have the back border
const inputValueSearch  =(e)  =>{

let currentValue = e.currentTarget.value;
console.log(currentValue)
changeSearchInputValue(currentValue)

}

//we have separated the mapping and lose nothing because the fetch is made to store the endpoint data locally for instant requersts
//now we hvae the request being made with the delivery of important data for asyncrhonous file transfers, we now have instantly

//we create global values, and the closed map iteratiuon through al lvalues scanning now decideds to map through array when amtches are found
//otherwise nothing happens, we can have the bounce of ripple
const handleChange = (e) => {
  
    setSelectErrorMessage(null)
    console.log(e.label)
    setSelectState(e.label)
    console.log(selectState)
}



return <div className="pt-4 "><h1>Search</h1> <div className="search-container">

<input className="search-input" onChange={inputValueSearch}></input>



<button onClick={SearchFunction}>Search</button>  <div className="select" onClick={getSelectValue}> 
<Select

value= {options.value}
onChange={(e) => handleChange(e)}

 options={options}/>







 
 
  </div><div className="search-return-items align-content-sm-center"> <div className=" search-column">{ternary} <>{errorMessage} {selectErrorMessage}</></div> </div>
</div></div>

}



export default SearchFunction