import { useEffect, useState } from "react"
import RecyclableFetch2 from "../../RecyclableFetch2";
import { Link } from "react-router-dom";

const AllProfiles = () => {

const [state, changeState] = useState(null);



useEffect(() => {


    const awaitData = async() => {


        changeState(await RecyclableFetch2("/social/profiles"))
    }

    awaitData()


}, [])



if(state != null) {

return (
    <div><h1>Profiles:</h1>

<div className="all-container">


{state.map((item)=> {




    return <div className="p-1"><div className="profiles-container-child"><Link className="link-element" to={`/profiles/${item.name}`}>{item.name}  <p className="mb-0 me-2 ms-3 mt-2 email-tag fw-light">     @{item.email}</p></Link></div></div>
})} </div></div> )
}

else { return <div>...Loading</div>}


}

export default AllProfiles