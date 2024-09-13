import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { pageData } from './pageData'

function Navbar() {

    const navigate = useNavigate();

    function handleLogout() {
        sessionStorage.removeItem("User");
        navigate("/");
    }

    return (
        <div className='navbar'>
            {pageData.map((page, index) => {
                return (
                    <Link to={page.path} key={index} className='navItem'>
                        <button>
                            {page.name}
                        </button>
                    </Link>
                )
            })}

            <button onClick={handleLogout}>Log Out</button>
        </div>
    )
}

export default Navbar