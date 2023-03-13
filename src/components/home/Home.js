import React from 'react'
import Navbar from '../navBar/NavBar'
import Main from '../main/Main'
import sideBar from '../sideBar/SideBar'
import './Home.css';
import Logout from '../logout/Logout';

const Home = () => {
  return (
    <>
    <div className='main'>
      <div className="container">

               <Navbar />
               <Main />
               <sideBar/>
      </div>
    </div>
    <Logout/>
   </>
  )
}

export default Home