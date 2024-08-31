import React from 'react'
import { Link } from 'react-router-dom'

import { pageData } from './pageData'

function Navbar() {
  return (
    <div className='navbar'>
        { pageData.map((page, index) => {
            return (
                <Link to={ page.path } key={index} className='navItem'>
                    <button>
                        { page.name }
                    </button>
                </Link>
            )
        }) }
    </div>
  )
}

export default Navbar