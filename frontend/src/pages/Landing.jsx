import { useState } from 'react'
import CreateUser from '../components/CreateUser'
import Login from '../components/Login'

function Landing() {

  // 0 = Login
  // 1 = Create
  const [view, setView] = useState(0);

  return (
    <>
      { !view ? 
        <>
          <Login/>
          <button onClick={ () => setView(!view) }>Create new Account</button>
        </>
      : 
        <>
          <CreateUser/>
          <button onClick={ () => setView(!view) }>Login existing Account</button>
        </>
       }
    </>
  )
}

export default Landing