import { baseUrl} from "./utility/Variables"

const contentType= 'Content-Type';
const Accept = 'Accept';

//if both content type and accept are put as undefined, those are the only variables we need to change 
//need to change for our request to go through as normal
const currentToken = localStorage.getItem("currentToken");
console.log(currentToken)
console.log(currentToken)
console.log(currentToken)
console.log(currentToken)
//our new recyclable fetch is exactly the same, it has the same values by default, exepct the are now all params
//we can in another fetch request change the params, entire body can be changed, entire reqeust body
const defaultHeaders = {
    'Content-Type': 'application/json',
      'Accept': 'application/json',
      Authorization: 'Bearer ' + currentToken,
       

      
  }; 

//remember to rewrite auth into localstoarge
  
async function RecyclableFetch2 (endpoint,  method ="GET",  request= null, headers = defaultHeaders) {



  try {





    const response = await fetch(baseUrl + endpoint,  {
       
      method: method,
     
      headers: headers,


    



    

    
    body: request
    
    
    
    })


    console.log(response)
    

    const jsonData = await response.json();
   console.log(jsonData)
    
    //copy top functino:: 'application/json'


    return jsonData


  } catch (error) {

console.log("error: " + error)

  }
    
    
       
    }
    
    export default RecyclableFetch2



    



    //can we make a const out of our entire headers in request::

