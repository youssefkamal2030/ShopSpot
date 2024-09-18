import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../AppProvider';
import './Login.css';

function Login() {
    const [username, setUserInput] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { loginUser } = useContext(UserContext);

    const handleSignIn = async (e) => {
        e.preventDefault();

        const userData = {
            username: username,
            password: password,
        };
        const token = localStorage.getItem('token'); 
        console.log(token);
        try {
            const response = await fetch('http://127.0.0.1:8000/profiles/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login successful', data);
                localStorage.setItem('token', data.token);
                loginUser({
                    username: username,
                    token: data.token,
                    loggedIn: true 
                });
                navigate('/');
            } else {
                const errorData = await response.json();
                console.error('Login failed', errorData);
                alert('Login failed: ' + (errorData.detail || 'Unknown error'));
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred: ' + error.message);
        }
    };

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src="/images/logo.png"
                    alt="logo"
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form onSubmit={handleSignIn}>
                    <h5>Email or Username</h5>
                    <input
                        type='text'
                        value={username}
                        onChange={e => setUserInput(e.target.value)}
                        className='login__input'
                    />

                    <h5>Password</h5>
                    <input
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className='login__input'
                    />

                    <button type='submit' className='login__signInButton'>Sign In</button>
                </form>

                <Link className='login__registerButton' to='/login/RegistrationForm'>
                    Create your ShopSpot Account
                </Link>
            </div>
        </div>
    );
}

export default Login;
