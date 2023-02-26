import { useEffect, useState } from "react"
import RecyclableFetch from "./RecyclableFetch"
import Reaction from "./Reaction"
import RecyclableFetch2 from "./RecyclableFetch2"
import MapPosts from "./MapPosts"
//my profile will be a list of all posts you have posted, a repeat of allposts, except, now it is only those that match a certain name
//this is profile with valukes, other than that, sam e get request ,apply same codce with this new request as value iterate value same





const MyProfile = () => {



    useEffect(() => {



    })


    return <MapPosts endpoint={"/social/profiles/Johan/posts"} />


}


export default MyProfile















