import axios from "axios";
const URL = "http://localhost:5000";

const addUser = async (data) => {
    try {
        return await axios.post(`${URL}/Registration`, data)
        // let userres = await axios.post(`${URL}/Registration`, data)
        // console.log(userres.status === 201);
        // if(userres.status === 204 ){
        //     alert('Data successfully inserted into MongoDB.');
        // }
    }
    catch (err) {
        console.log("Error while calling", err);
        alert('Error inserting data into MongoDB.');
    }
}
const checkUser = async (data) => {
    try {
        const response = await axios.post(`${URL}/SignIn`, data)
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }



}
export { addUser, checkUser }