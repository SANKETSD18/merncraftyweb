import axios from "axios";
const URL = "http://localhost:5000";

const addUser = async (data) => {
    try {
        return await axios.post(`${URL}/Registration`, data)
    }
    catch (err) {
        console.log("Error while calling", err);
        // alert("email already exist")
    }
}
const checkUser = async (data) => {
    try {
        const response = await axios.post(`${URL}/SignIn`, data)
        if (response === "") {
            // console.log(response);
            console.log();
        }
    }
    catch (error) {
        console.log(error);
    }



}
export { addUser, checkUser }