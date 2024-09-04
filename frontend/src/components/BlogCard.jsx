import React from 'react'
import { Link } from 'react-router-dom'

function BlogCard({ post : { _id, title, description, createdAt } }) {  // props
    let date = new Date(createdAt);
    let stringDate = date.toDateString();
    return (
    <Link to={ `/read-blog/${_id}` } className='post'>
        <h1>{ title }</h1>
        <h2>{ description }</h2>
        <h3>{ stringDate.slice(4, 15) }</h3>
    </Link>
  )
}

export default BlogCard