import { currentUser } from "../../../variables/Variables";
import RecyclableFetch2 from "../../RecyclableFetch2";





function EditProfile  (requestBody) {




    return RecyclableFetch2("/social/profiles/" + currentUser + "/media", "PUT", requestBody)



}

export default EditProfile