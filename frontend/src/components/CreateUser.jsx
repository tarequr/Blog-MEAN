import React from 'react'
import { useState } from 'react'

function CreateUser() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    function handleChange(event) {
        setUser({ ...user, [event.target.name] : event.target.value })
    }

    async function handleSubmit() {
        // Create  
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