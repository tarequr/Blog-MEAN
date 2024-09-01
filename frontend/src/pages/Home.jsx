import React from 'react'
import { getPosts } from '../api'
import { useState, useEffect } from 'react'

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPostsHandel() {
      const data = await getPosts();
      // console.log(data);
      setPosts(data.posts);
    }

    getPostsHandel();
  }, []);

  return (
    <>
      { posts.map((post) => {
        return(
          <>
            <h1>{ post.title }</h1>
            <h2>{ post.description }</h2>
            <p>{ post.createdAt }</p>
          </>
        )
      }) }
    </>
  )
}

export default Home