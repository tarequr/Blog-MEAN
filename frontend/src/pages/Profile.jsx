import { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard';
import * as jwt_decode from 'jwt-decode';
import { getPosts } from '../api';

function Profile() {
  const [posts, setPosts] = useState([]);
  const [user, sertUser] = useState({});

  useEffect(() => {
    async function fetchUserData() {
      const token = sessionStorage.getItem("User");
      const decodeUser = jwt_decode.jwtDecode(token);
      const allPosts = await getPosts();

      const filteredPosts = allPosts.posts.filter((post) => post.author == decodeUser._id);
      
      setPosts(filteredPosts);
      sertUser(decodeUser);
    }

    fetchUserData();
  }, []);

  return (
    <>
      <label>Name:</label>
      <h2>{ user.name }</h2>

      <label>Email:</label>
      <h2>{ user.email }</h2>

      <label>Join Date:</label>
      <h2>{ user.createdAt }</h2>

      {
        posts.map((post, index) => {
          return (
            <BlogCard post={post} key={index}/>
          )
        })
      }
    </>
  )
}

export default Profile