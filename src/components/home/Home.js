import React from 'react'
import Navbar from '../navBar/NavBar'
import Main from '../main/Main'
import Sidebar from '../sideBar/SideBar'
import './Home.css';
import Logout from '../logout/Logout';

const Home = () => {
  return (
    <>
    <div className='main'>
      <div className="container">

               <Navbar />
               <Main />
                <Sidebar />
      </div>
    </div>
    <Logout/>
   </>
  )
}

export default Home