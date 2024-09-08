import { useState } from 'react'
import { createUser } from '../api';

function CreateUser() {
    const [user, setUser] = useState({
        name: "",
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
            const response = await createUser(user);
            if (response.status === 201) {
                setMessage('User created successfully!');
            } else {
                setMessage('Failed to create user');
            }
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder='Enter name' onChange={handleChange} maxLength={20} required/>
            <input type="email" name='email' placeholder='Enter email' onChange={handleChange} maxLength={40} required/>
            <input type="password" name='password' placeholder='Enter password' onChange={handleChange} maxLength={20} required/>
            
            <button type='submit'>Create Account</button>
        </form>
    )
}

export default CreateUser