import { useState, useEffect } from 'react'
import { getPosts, getPost, createPost, updatePost, deletePost } from './api';

import './App.css'

function App() {
  const [ postData, setPostData ] = useState();

  async function createPostHandler() {
    let postObject = {
      title: "This is a system title 2",
      description: "This is a system description 2",
      content: "This is a system content 2",
      author: "Md. System Author 2",
    }

    createPost(postObject);
  }

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
      { JSON.stringify(postData) }
      <br />
      <br />

      <button onClick={ createPostHandler }>
        Create Post
      </button>
    </>
  )
}

export default App
