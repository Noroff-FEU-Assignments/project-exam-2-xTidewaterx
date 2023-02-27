import RecyclableFetch2 from "../components/RecyclableFetch2";

const DeletePost = async(id) => {


    const currentId = id;

if (window.confirm('Are you sure you want to delete this post?')) {

    await RecyclableFetch2("/social/posts/" + currentId, "DELETE")
       document.getElementById("post" + currentId).style.display = "none";

       console.log("message: post was deleted, id: " + id)
} else {
    console.log("message: post was not confirmed to be deleted, post:" + id + " is spared")
}
    
    }
    

    export default DeletePost