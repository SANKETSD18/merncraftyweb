import mongoose from "mongoose";



const conn = async () => {
    const URL = `mongodb+srv://sanket1610sd:7869529857@adduser.7bjsln7.mongodb.net/Cluster0?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, {
            // maxPoolSize: 50, 
            // wtimeoutMS: 2500,
            useNewUrlParser: true,
            useUnifiedTopology: true });
            console.log("connection succesfully")
       
    } catch (error) {
        console.log(`error while connecting with database`, error)

    }
}

export default conn;