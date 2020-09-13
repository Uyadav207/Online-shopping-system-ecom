import React, { useState } from 'react'
import '../CSS/Login.css'
import shopcart from '../assets/shopcart.png';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase'

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then((auth) => {
      history.push('/');  
    })
    .catch(e => 
            alert(e.message)
        );
};

const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password)
    .then((auth) => {
        history.push('/');
    })
    .catch(e => alert(e.message));
};


    return (
        <div className="login">
            <Link to="/">
                    <img className="login_auth" 
                        src={shopcart}
                        alt="Logo"
                    />
            </Link>
            <div className="login_box">
                <h1>sign in</h1>
                <form>
                <h5>Email</h5>
                <input value={email} onChange={event => setEmail(event.target.value)} type="text" >
                </input>
                <h5>Password</h5>
                <input value={password} onChange={event => setPassword(event.target.value)} type="password" >
                </input>
                <button onClick={login} className="login_signin_button" >Sign In</button>
                </form>
                <p>
                <input type="checkbox" />By Signing you agree to shop cart buying terms and conditions.</p>
                <button onClick={register} className="createaccount_button" > Create you shopcart account Now</button>
            </div>
        </div>
    )
}

export default Login
