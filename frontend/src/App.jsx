import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [ postData, setPostData ] = useState();

  async function createPost() {
    let postObject = {
      title: "This is a system title",
      description: "This is a system description",
      content: "This is a system content",
      author: "Md. System Author",
    }

    await axios.post("http://localhost:3000/api/v1/posts/create", postObject);
  }

  useEffect(() => {
    async function grabData() {
      const response = await axios.get("http://localhost:3000/api/v1/posts");
      // console.log(response);
      if (response.status === 200) {
        setPostData(response.data);
      }
    }

    grabData();
  }, []);

  return (
    <>
      { JSON.stringify(postData) }
      <br /> <br />
      <button onClick={ createPost }>
        Create Post
      </button>
    </>
  )
}

export default App
