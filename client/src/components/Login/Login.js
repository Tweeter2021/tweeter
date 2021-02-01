import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Alert from "@material-ui/lab/Alert";

function Login(props) {
    const [state, setState] = useState({
        email: "",
        password: "",
        successMessage: null,
        value: '',
        alert: false
    })

    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        const payload = {
            "email": state.email,
            "password": state.password,
        }
        axios.post('/login', payload)
            .then(function (response) {
                console.log(response.data)
                if (response.status === 200) {
                    console.log(response.data)
                    localStorage.setItem('token', JSON.stringify(response.data))
                    window.location.href = '/home'
                    var user = JSON.parse(localStorage.getItem('token'));
                    console.log('username:',user['username'])
                }
                if (response.status === 203) {
                    console.log("hi")

                    setState({
                        value: "wrong password",
                        alert: true,
                    });

                }
                if (response.status === 204) {
                    console.log("hi")

                    setState({
                        value: "wrong email",
                        alert: true,
                    });

                }

            })
            .catch(function (error) {
            console.log(error.status);
            });
    }
    return (
        <div className="login-form">
            <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
                <form>
                    <nav className="navbar navbar-dark bg-primary">
                        <div className="row col-12 d-flex justify-content-center text-white">
                            <span className="h3">Log in</span>
                        </div>
                    </nav>
                    <div className="form-group text-left">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input type="email"
                            className="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            value={state.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            value={state.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-check">
                    </div>
                    {state.alert && (
                        <>
                            <br></br>
                            {/* <Alert severity="error">{state.value}</Alert> */}
                        </>
                    )}
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleSubmitClick}
                    >Log In</button>
                </form>
                <div className="alert alert-success mt-2" style={{ display: state.successMessage ? 'block' : 'none' }} role="alert">
                    {state.successMessage}
                </div>
                <div className="registerMessage">
                    <span>Dont have an account? </span>
                    {/* <span className="loginText" onClick={() => redirectToRegister()}>Register</span> */}
                </div>
            </div>
        </div>
    )
}

export default Login;