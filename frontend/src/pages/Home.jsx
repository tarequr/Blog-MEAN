import React from 'react'
import { getPosts } from '../api'
import { useState, useEffect } from 'react'
import BlogCard from '../components/BlogCard';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPostsHandel() {
      const data = await getPosts();
      data.sort(d1, d2) => new Date(d2.createdAt).getTime() - new Date(d1.createdAt).getTime();
      // console.log(data);
      setPosts(data.posts);
    }

    getPostsHandel();
  }, []);

  return (
    <div className='posts'>
      { posts.map((post, id) => {
        return(
          <BlogCard key={id} post={post}/>
        )
      }) }
    </div>
  )
}

export default Home