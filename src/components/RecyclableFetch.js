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


    //make auth localstorage value on load always get from storage for anyone logging in it is created such a value, and then used for any fetch needing auth or use param

    
    body: request
    
    
    
    })
    console.log(response)
    

    const jsonData = await response.json();
   console.log(jsonData)
    
    


    return jsonData
    
       
    }
    
    export default RecyclableFetch


    