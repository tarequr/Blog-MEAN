import { useState, useEffect } from 'react'
import { getPosts, getPost, createPost, updatePost, deletePost } from './api';

import './App.css'

function App() {
  const [ postData, setPostData ] = useState();

  // async function createPost() {
  //   let postObject = {
  //     title: "This is a system title",
  //     description: "This is a system description",
  //     content: "This is a system content",
  //     author: "Md. System Author",
  //   }

  //   await axios.post("http://localhost:3000/api/v1/posts/create", postObject);
  // }

  useEffect(() => {
    async function loadPosts() {
      let data = await getPosts();
      if (data) {
        setPostData(data);
      }
    }

    loadPosts();
  }, []);

  return (
    <>
      
    </>
  )
}

export default App
