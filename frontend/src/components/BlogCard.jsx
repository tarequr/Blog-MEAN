import React from 'react'

function BlogCard({ post : { title, description, createdAt } }) {  // props
    let date = new Date(createdAt);
    let stringDate = date.toDateString();
    return (
    <div className='post'>
        <h1>{ title }</h1>
        <h2>{ description }</h2>
        <h3>{ stringDate.slice(4, 15) }</h3>
    </div>
  )
}

export default BlogCard