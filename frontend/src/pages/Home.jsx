import React from 'react'
import { getPosts } from '../api'
import { useState, useEffect } from 'react'
import BlogCard from '../components/BlogCard';

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
      { posts.map((post, id) => {
        return(
          <BlogCard key={id} post={post}/>
        )
      }) }
    </>
  )
}

export default Home