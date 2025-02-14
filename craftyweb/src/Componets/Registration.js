import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addUser } from "./api";
import { useNavigate } from "react-router-dom";

const Help = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        //  cwrpassword: "",
    });
    let name, value;
    const inputs = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUser({ ...user, [name]: value });
    };
    const submit = async (event) => {
        event.preventDefault();
        const { name, email, phone, password, cwrpassword } = user;
        if (name === " ") {
            toast.error("Name is Required !");
        } else if (email === "") {
            toast.error("Email is Required !");
        } else if (!email.includes("@")) {
            toast.error("Enter valid Email !");
        } else if (phone === "") {
            toast.error("Phone is Required !");
        } else if (phone.length > 11 && phone.length < 9) {
            toast.error("Enter Vailid Phone Number !");
        } else if (password === "") {
            toast.error("password is Required !");
        } else if (password.length < 3 && cwrpassword.length < 3) {
            toast.error("Password should be minimum 8 characters!");
        }
        // else if (password !== cwrpassword) {
        //   toast.error("Password does not match !");
        // }
        else {
            // toast.success("Registration successful");
            let res = await addUser(user);
            if (res.data.success) {
                toast.success("Login Successfull", {
                    autoClose: 1000,
                });
                setTimeout(() => {
                    navigate("/");
                }, 1500);
            } else {
                toast.error(res.data.message, {
                    autoClose: 1000,
                });
            }
        }
    };
    return (
        <>
            <div className="text-center col-lg-12 ">
                <form
                    className="text-center px-5 col-12 "
                    method="POST"
                    autoComplete="off"
                    onSubmit={submit}
                    style={{
                        backgroundColor: "#eeaeca",
                    }}
                >
                    <h1 className="text-center">ENTER YOUR DETAIL</h1>
                    <div className="form-group">
                        <h5> Enter Your Name</h5>
                        <input
                            className="form-control mb-4  text-center"
                            type="text"
                            name="name"
                            id="name"
                            value={user.name}
                            onChange={inputs}
                        />
                    </div>
                    <div className="form-group">
                        <h5>Enter Your email</h5>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            value={user.email}
                            className="form-control mb-4 text-center"
                            onChange={inputs}
                        />
                    </div>
                    <div className="form-group">
                        <h5>Enter Your Phone Number</h5>
                        <input
                            type="text"
                            onChange={inputs}
                            name="phone"
                            value={user.phone}
                            className="form-control mb-4 text-center"
                        />
                    </div>
                    <div className="form-group">
                        <h5>Enter Your Password</h5>
                        <input
                            type="text"
                            onChange={inputs}
                            name="password"
                            value={user.password}
                            className="form-control mb-4  text-center"
                        />
                    </div>
                    {/*<div className="form-group">
                    //    <h5>Enter Your Confirem Password</h5>
                        <input
                            type="text"
                            onChange={inputs}
                            name="cwrpassword"
                            value={user.cwrpassword}
                            className="form-control  text-center"
                        />
                    </div>*/}
                    <button
                        type="submit"
                        className="btn btn-primary btn-lg btn-block mt-3"
                    >
                        Submit
                    </button>
                </form>
                <ToastContainer position="top-center" />
            </div>
        </>
    );
};

export default Help;
