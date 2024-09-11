import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Contact from './pages/Contact';
import CreateBlog from './pages/CreateBlog';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import ReadBlog from './pages/ReadBlog';
import Navbar from './components/Navbar';  // Import Navbar without braces
import Layout from './components/Layout';  // Import Layout based on how it's exported
import { useEffect } from 'react';
import axios from 'axios';


function App() {

  useEffect(() => {
    let token = sessionStorage.getItem("User");
  
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      // console.log("Token is set in the headers:", token);  // Debugging line
    } else {
      console.log("No token found");
    }
  }, []);

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route element={<Layout/>}>
              <Route path="/home" element={<Home />} />
              <Route path="/create-blog" element={<CreateBlog />} />
              <Route path="/read-blog/:id" element={<ReadBlog />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
        </Routes>
    </Router>
  );
}

export default App
