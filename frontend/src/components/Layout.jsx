import { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigate } from 'react-router-dom'

function Layout() {
  let user = sessionStorage.getItem('User');
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  },[user]);

  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}

export default Layout