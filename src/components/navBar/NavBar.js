import React from 'react';
import './NavBar.css';
import User from '../../assests/img/User.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStream, faEllipsisH, faPlus, faHome, faChartLine, faCompass, faNewspaper, faCalendar, faCalendarAlt, faHeart, faUser, faStar } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
  return (
    <div id="navbar">
      <div className="navbar-container">
        <header>
          <span className="check">
            <span className="ball"></span>
          </span>
          <FontAwesomeIcon icon={faStream}></FontAwesomeIcon>
        </header>
        <div className="logo">
          <FontAwesomeIcon className="navbar__logo"></FontAwesomeIcon>
          <span className="navbar__primary-text">Bee</span><span>music</span>
        </div>
        <div className="navbar-content">
          <nav>
            <ul>
              <li className="navbar-content__icon">
                <a href="#"><FontAwesomeIcon icon={faHome}></FontAwesomeIcon>Home</a>
                <a href="#"><i className="fas fa-home"></i></a>
              </li>
              <li className="navbar-content__icon">
                <a href="#"><FontAwesomeIcon icon={faChartLine}></FontAwesomeIcon>Trend</a>
              </li>
              <li className="navbar-content__icon">
                <FontAwesomeIcon icon={faCompass}></FontAwesomeIcon>
                <a href="#">Feed</a>
              </li>
            </ul>
          </nav>
          <nav>
            <p className="navbar-content__title">Discover</p>
            <ul>
              <li className="navbar-content__icon">
                <a href="#"><FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon>New and Notable</a>
              </li>
              <li className="navbar-content__icon">
                <a href="#"><FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>Realese Calendar</a>  
              </li>
              <li className="navbar-content__icon">
                <a href="#"> <FontAwesomeIcon icon={FormDataEvent}></FontAwesomeIcon>Events</a>
              </li>
            </ul>
          </nav>
          <nav>
            <p className="navbar-content__title">Your Collection</p>
            <ul>
              <li className="navbar-content__icon">
                <a href="#"> <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon> Favorite Songs</a>
              </li>
              <li className="navbar-content__icon">
                <a href="#"> <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>Artist</a>
              </li>
              <li className="navbar-content__icon">
                <a href="#"> <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> Albums</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="navbar-user">
        <div className="navbar-user__container">
          <div className="user-avt">
            <img src={User} alt="User" />
          </div>
          <div className="user-name">Bùi Thúy Ngọc</div>
          <a href=""><i className="fas fa-chevron-right"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
