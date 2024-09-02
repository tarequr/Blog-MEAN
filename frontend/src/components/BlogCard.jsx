import React from 'react'

function BlogCard({ post }) {  // props
  return (
    <>
        <h1>{ post.title }</h1>
        <h2>{ post.description }</h2>
        <p>{ post.createdAt }</p>
    </>
  )
}

export default BlogCard