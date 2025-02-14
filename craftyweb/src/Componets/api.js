import axios from "axios";

const URL = "https://fcf7495d-7b01-464b-8d59-c33b8446d3e3-00-142eqdedg8t14.pike.replit.dev";
// right const URL = "https://fcf7495d-7b01-464b-8d59-c33b8446d3e3-00-142eqdedg8t14.pike.replit.dev" || 8080;

const addUser = async (data) => {
    try {
         //await axios.post(`${URL}/Registration`, data)
         let userres = await axios.post(`${URL}/Registration`, data)
        console.log(userres.status === 201);
        if(userres.status === 204 ){
            alert('Data successfully inserted into MongoDB.');
        }
    }
    catch (err) {
        console.log("Error while calling", err);
        alert('Error inserting data into MongoDB.');
    }
}
const checkUser = async (data) => {
    try {
        const response = await axios.post(`${URL}/SignIn`, data)
        return response;
    }
    catch (error) {
        console.log(error);
    }



}
export { addUser, checkUser }