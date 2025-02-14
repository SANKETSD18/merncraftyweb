import mongoose from "mongoose";


const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    //cwrpassword: {
      //  type: String,
        //required: true,
    //},
});

const loginusers = mongoose.model("loginusers", Schema);

export default loginusers;
