import { useEffect, useState } from "react"
import RecyclableFetch from "../RecyclableFetch"
import RecyclableFetch2 from "../RecyclableFetch2"
import { Link } from "react-router-dom"

const AllPosts = ()=> {

const[state, changeState] = useState(null)





useEffect(() =>{

const awaitData = async() => {



changeState(await RecyclableFetch2("/social/posts"))

    
}

awaitData()


}, [])






if(state != null) {
    console.log(state)

return  <div className="mt-5"><h1>All Posts</h1><div className="all-container list-posts-all ">



{state.map((item) => {


    return <div className="all-container list-posts-all all-post-rows"> <Link className="link-element" to={"/Posts/" + item.id}><li>{item.title}</li></Link></div>
}) }</div> </div>




} else {


    return <div>...Loading</div>
}


}


export default AllPosts