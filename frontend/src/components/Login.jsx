import { useState } from 'react'
import { verifyUser } from '../api';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const [message, setMessage] = useState(null);

    const navigate = useNavigate();

    function handleChange(event) {
        setUser({ ...user, [event.target.name] : event.target.value })
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await verifyUser(user);
            // console.log(response);
            if (response) {
                setMessage('User login successfully!');
                navigate("/home");

                axios.defaults.headers.common["Authorization"] = `Bearer ${response}`;
                sessionStorage.setItem("user", response);
            } else {
                setMessage('Failed to login user');
            }
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name='email' placeholder='Enter email' onChange={handleChange} maxLength={40} required/>
            <input type="password" name='password' placeholder='Enter password' onChange={handleChange} maxLength={20} required/>
            
            <button type='submit'>Login</button>
        </form>
    )
}

export default Login