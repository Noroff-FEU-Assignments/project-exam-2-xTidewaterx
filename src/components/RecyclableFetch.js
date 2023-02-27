import { baseUrl} from "./utility/Variables"
const currentToken = localStorage.getItem("currentToken");

async function RecyclableFetch (endpoint, method ="GET", request= null) {


 

    const response = await fetch(baseUrl + endpoint,  {
     
      method: method,
     
      headers: {
        'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: 'Bearer ' + currentToken,
           

          
      },



    
    body: request
    
    
    
    })
    console.log(response)
    

    const jsonData = await response.json();
   console.log(jsonData)
    
    


    return jsonData
    
       
    }
    
    export default RecyclableFetch


    