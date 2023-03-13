import React from 'react';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStream, faEllipsisH, faPlus } from '@fortawesome/free-solid-svg-icons';
import snow from '../../assests/img/snow.png';
import star from '../../assests/img/star.png';
import piano from '../../assests/img/piano.png';
import jazz from '../../assests/img/jazz.png';
import ghitar from '../../assests/img/ghitar.png';
import tócTiên from '../../assests/img/tóc-tiên.jpg';
import min from '../../assests/img/min.jpg';
import ngô from '../../assests/img/ngô-lan-hương.jpg';

function SideBar() {
  return (
    <div id="sidebar">
      <div className="sidebar__shortcuts">
        <p className="sidebar__shortcuts-title">Shortcuts
          <FontAwesomeIcon icon={faStream} className="js-hide-sidebar"></FontAwesomeIcon>
        </p>
        <div className="sidebar__shortcuts-items">
          <span className="sidebar__shortcuts-item">Chill
            <img src={snow} alt="" />
          </span>
          <span className="sidebar__shortcuts-item">Hot
            <img src={star} alt="star" />
          </span>
          <span className="sidebar__shortcuts-item">Piano instrumental
            <img src={piano} alt="piano" />
          </span>
          <span className="sidebar__shortcuts-item">Jazz
            <img src={jazz} alt="jazz" />
          </span>
          <span className="sidebar__shortcuts-item">Acoustic
            <img src={ghitar} alt="ghitar" />
          </span>
        </div>
      </div>

      <div className="sidebar__favorite">
        <p className="sidebar__favorite-title">Favorite Artists</p>
        {/* ARTIST 1 */}
        <div className="sidebar__favorite-list">
          <div className="artist-info__avt">
            <img src={tócTiên} alt="tóc-tiên" />
          </div>                   
          <div className="artist-info">
            <h4 className="artist-info__name">Tóc Tiên</h4>
            <p className="artist-info__song">6 songs in library</p>
          </div>
          <FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon>
        </div>

        {/* ARTIST 2 */}
        <div className="sidebar__favorite-list">
          <div className="artist-info__avt">
            <img src={min} alt="min" />
          </div>                   
          <div className="artist-info">
            <h4 className="artist-info__name">Min</h4>
            <p className="artist-info__song">5 songs in library</p>
          </div>
          <FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon>
        </div>
      </div>

      <div className="sidebar__suggest-album">
        <div className="suggest-album">
          <div className="suggest-album__img-container">
            <img src={ngô} alt="ngô-lan-hương" />
          </div>
          <div className="suggest-album__content">
            <div className="suggest-album__info">
              <h4>Anh muốn đưa em về không</h4>
              <p>Ngô Lan Hương</p>
            </div>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;