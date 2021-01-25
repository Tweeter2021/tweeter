import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login(props) {
    const [state, setState] = useState({
        email: "",
        password: "",
        successMessage: null
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
                if (response.status === 200) {
                    console.log('hello')

                }

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="login mt-2">
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