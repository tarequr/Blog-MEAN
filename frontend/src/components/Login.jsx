import { useState } from 'react'
import { verifyUser } from '../api';

function Login() {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const [message, setMessage] = useState(null);

    function handleChange(event) {
        setUser({ ...user, [event.target.name] : event.target.value })
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await verifyUser(user);
            if (response.status === 200) {
                setMessage('User login successfully!');
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