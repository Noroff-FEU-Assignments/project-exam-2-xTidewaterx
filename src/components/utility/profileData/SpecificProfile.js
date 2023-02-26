import { useEffect, useState } from "react"
import RecyclableFetch from "../../RecyclableFetch"
import { useParams } from "react-router-dom";
import FollowProfile from "../../FollowProfile";
//now:: create additions of request that come in the form of element that when engaged use the useparam value and then fire off, with notif return values change useffect state
import { currentUser } from "../../../variables/Variables";
import FollowUnfollow from "./FollowUnfollow";
import MapPosts from "../../MapPosts";






//this component loads, gets to the first dom that is loading because null state, then useffect gets the async return

const SpecificProfile = (props) => {

const [followedProfiles, setFollowedProfiles] = useState(null)



    const {profile} = useParams(); //we call this in the responsible component, link is here, on redner we have route lement render, browserrouter links this to our render, we now have connection

console.log({profile})

    const[state, changeState] = useState(null)

//get params 

console.log(useParams)


useEffect(()=>{







    const fetchSpecific = async() => {




     const fetchValue = await  RecyclableFetch(`/social/profiles/` + profile + "?_following=true&_followers=true")
     const fetchFollowedProfiles = await  RecyclableFetch(`/social/profiles/` + currentUser + "?_following=true&_followers=true")

changeState(fetchValue)
setFollowedProfiles(fetchFollowedProfiles)


        
    }

    fetchSpecific()

  //  fetchSpecific()
},[])






let avatarCheck = null;

if(state!= null) {

  avatarCheck = state.avatar ? state.avatar : "error, no avatar image"

}




if(state == null) {

    console.log({profile})
    return <>...Loading</>
}

if(state.status) {

  return <div>{state.status}</div>
}


else {



    return <div><h1>{state.email}</h1> 
    
    


    <FollowUnfollow followArray = {followedProfiles} currentUser={currentUser} currentProfile={{profile}} />
{state.name}
  
  <MapPosts endpoint ={ "/social/profiles/" + state.name + "/posts"}/>
    </div>

}


}


export default SpecificProfile