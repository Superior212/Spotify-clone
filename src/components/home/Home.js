import React from 'react'
import Navbar from '../navBar/NavBar'
import Main from '../main/Main'
import SideBar from '../sideBar/SideBar'
import './Home.css';
import Logout from '../logout/Logout';

const Home = () => {
  return (
    <>
    <div className='main'>
      <div className="container">

               <Navbar />
               <Main />
               <SideBar/>
      </div>
    </div>
    <Logout/>
   </>
  )
}

export default Home