import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/usefirebase';
import './Login.css';

const Login = () => {
    const {user,signInUsingGoogle} = useFirebase();


    const handelRegistration = e =>{
        console.log('hsjdksjd');
        e.preventDefault()
    }
    return (
        <div className="loginStyle">
            <div>
            <h3>Login</h3>
            <form onSubmit={handelRegistration}>
                <input type="email" name="" id="" placeholder="Your Email"/>
                <br />
                <input type="possword" name="password" id="" placeholder="Your Password"/>
                <br />
                <input className="bg-primary text-light" type="submit" name="" value="Submit"/>
            </form>
            <p>New to mediCare? <Link to="/register">Create Account</Link></p>
            </div>
            <div>
                <button 
                className="bg-primary text-light"
                onClick={signInUsingGoogle}
                >GoogleSign In</button>
            </div>
        </div>
    );
};

export default Login;