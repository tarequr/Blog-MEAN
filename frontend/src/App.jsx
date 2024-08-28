import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [ postData, setPostData ] = useState();

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
    </>
  )
}

export default App
