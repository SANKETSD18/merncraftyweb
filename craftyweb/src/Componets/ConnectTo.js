import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { checkUser } from './api'
import { useNavigate } from 'react-router-dom';

const ConnectTo = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    let name, value;
    const inputs = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUser({ ...user, [name]: value });
    }
    const submit = async (event) => {
        event.preventDefault();
        const { email, password } = user;
        if (email === "") {
            toast.error("Email is Required !");
        }
        else if (!email.includes("@")) {
            toast.error("Enter valid Email !");
        }
        else if (password === "") {
            toast.error("password is Required !");
        } else if (password.length < 8) {
            toast.error("Password should be minimum 8 characters!");
        }
        else {
            let res = await checkUser(user);
            console.log(res);
            if (res.data.success) {
                toast.success("Login Successfull", {
                    autoClose: 1000
                });
                setTimeout(() => {
                    navigate('/');
                }, 1500);                
            }
            else{
                toast.error(res.data.message, {
                    autoClose: 1000
                });
            }
        }

    }
    return (
        <>
            <div className="d-flex align-items-center rounded justify-content-center  vh-100 "
                style={{
                    backgroundColor: "#94bbe9",
                }}>
                <div className="container rounded" style={{
                    backgroundColor: "#eeaeca"
                }}    >

                    <form className='text-center px-5 col-12 ' method='POST' autoComplete="off" onSubmit={submit} style={{
                        backgroundColor: "#eeaeca"
                    }}>
                        <h1 className='text-center'>ConnectTo</h1>
                        <div className="form-group">
                            <h5>Enter Your email</h5>
                            <input type="text" name='email' id='email' value={user.email} className="form-control mb-4 text-center" onChange={inputs} />
                        </div>
                        <div className="form-group">
                            <h5>Enter Your Password</h5>
                            <input type="text" onChange={inputs} name='password' value={user.password} className="form-control mb-4  text-center" />
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg btn-block mt-3">LOG IN</button>
                    </form>
                    <ToastContainer position="top-center" />

                </div>
            </div >
        </>)
}

export default ConnectTo