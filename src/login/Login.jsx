import React, { useState } from 'react';
import './Login.css'
import { Link } from "react-router-dom";
function Login() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                     src="/images/logo.png"
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} style={{border:'2px solid #000'}} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' style={{border:'2px solid #000'}}value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login__signInButton'>Sign In</button>
                </form>
                <button className='login__registerButton'>Create your ShopSpot Account</button>
            </div>
        </div>
    )
}

export default Login