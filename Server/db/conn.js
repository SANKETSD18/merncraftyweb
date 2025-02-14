import mongoose from "mongoose";
import dotenv from 'dotenv'; 
 dotenv.config(); 


const conn = async () => {
    const URL = process.env.MONGO_CONN;
    
       await mongoose
         .connect(URL, {
           useNewUrlParser: true,
           useUnifiedTopology: true,
         })
         .then(() => {
           console.log("DB Connetion Successfull");
         })
         .catch((err) => {
           console.log(err.message);
         });
    
};

export default conn;
