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
const polishedSearchValue = currentSearchValue.replace(/\s+/g, ' ').trim(); 
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




function SearchFunction (param) {

    const currentSearchValue = searchInputValue;
    let matchedSearchArray = []
    setSearchReturn([])
    param = selectState;


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




console.log(currentSearchValue)
state.map((item)=> {

     param = selectState.toString(2);
 
 

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


if(matchedSearchArray == []) {

    console.log(searchReturn.length)
    console.log("problem error")
    setErrorMessage("Sorry, no matches were found, query problem")

 
}




}



const ternary = searchReturn[0]?.title ?    searchReturn.map((item) => {return <div className="p-4 search-item-container"><Link to={"/posts/" + item.id}>{item.title}</Link>  </div>}):   searchReturn.map((item) => {return <div className="p-4 search-item-container"><Link to={"/profiles/" + item.name }>{item.name}</Link>  </div>});




console.log(ternary);
console.log(searchReturn)



const inputValueSearch  =(e)  =>{

let currentValue = e.currentTarget.value;
console.log(currentValue)
changeSearchInputValue(currentValue)

}


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