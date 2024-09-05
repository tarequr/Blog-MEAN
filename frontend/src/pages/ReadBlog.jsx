import { useEffect, useState } from 'react'
import { getPost } from '../api'
// import {useParams} from 'react-router-form'
import { useNavigate, useParams } from "react-router-dom";

function ReadBlog() {
  const [post, setPost] = useState({});

  const navigate = useNavigate();
  let params = useParams();
  let id = params.id
  
  useEffect(() => {
    async function fetchPostData() {
      let allData = await getPost(id);
      let date = new Date(allData.post.createdAt);

      allData.post.createdAt = date.toString();
      setPost(allData.post);
    }

    fetchPostData();
  }, []);

  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>{ post.title }</h1>
      <h2>{ post.description }</h2>
      <h3>{ post.createdAt?.slice(4 ,15) }</h3>
      <p>{ post.content }</p>
    </>
  )
}

export default ReadBlog