// GET /api/v1/social/posts/0?_author=true&_comments=true&_reactions=true

import RecyclableFetch from "./RecyclableFetch"




const GetPostsWithAuthor = () => {

const awaitData = async () => {



  console.log( await RecyclableFetch("/social/posts?_author=true&_comments=true&_reactions=true"))

}

awaitData()

    return <div>hhhh</div>

}

export default GetPostsWithAuthor