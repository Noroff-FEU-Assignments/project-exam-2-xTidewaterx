
import RecyclableFetch2 from "../components/RecyclableFetch2"




async function FetchFunction(endpoint) {


return RecyclableFetch2("/social/profiles/" + endpoint)



}

export default FetchFunction