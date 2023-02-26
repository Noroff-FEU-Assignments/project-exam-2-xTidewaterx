import { useState, useEffect } from "react"
import { currentUser } from "../../../variables/Variables"
import RecyclableFetch from "../../RecyclableFetch"


const FollowedProfiles = (profile) => {

const [followedProfiles, setFollowedProfiles] = useState(null)
const [state, changeState] = useState(null)

    useEffect(()=>{





//have this source from the original fetcher

        const fetchSpecific = async() => {
    
    
    
    
         const fetchValue = await  RecyclableFetch(`/social/profiles/` + profile + "?_following=true&_followers=true")
         const fetchFollowedProfiles = await  RecyclableFetch(`/social/profiles/` + currentUser + "?_following=true&_followers=true")
    
    changeState(fetchValue)
    setFollowedProfiles(fetchFollowedProfiles)
    
    
            
        }
    
        fetchSpecific()
    
      //  fetchSpecific()
    },[])




    return followedProfiles



    
}

export default FollowedProfiles