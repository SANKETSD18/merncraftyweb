import mongoose from "mongoose";
import bcrypt from "bcrypt"

// import autoIncrement from 'mongoose-auto-increment';
const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cwrpassword: {
        type: String,
        required: true
    }
})
// autoIncrement.initialize(mongoose.connection);
// Sche.plugin(autoIncrement.plugin, 'user');

const user = mongoose.model('user', Schema);

export default user;
// Schema.pre('save', async function (next) {
//     if (this.isModified('password')) {
//         this.password = bcrypt.hash(this.password, 12);
//         this.cwrpassword = bcrypt.hash(this.cwrpassword, 12);
//     }
//     next();
// })

