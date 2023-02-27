import { baseUrl} from "./utility/Variables"

const contentType= 'Content-Type';
const Accept = 'Accept';

const currentToken = localStorage.getItem("currentToken");
console.log(currentToken)
console.log(currentToken)
console.log(currentToken)
console.log(currentToken)
const defaultHeaders = {
    'Content-Type': 'application/json',
      'Accept': 'application/json',
      Authorization: 'Bearer ' + currentToken,
       

      
  }; 

  
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
    


    return jsonData


  } catch (error) {

console.log("error: " + error)

  }
    
    
       
    }
    
    export default RecyclableFetch2



    



