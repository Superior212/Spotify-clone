import React, { useState, useEffect } from "react";
import { MdFormatQuote } from "react-icons/md";
// import{Data} from'./components/Data'
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faArrowLeft,
  faArrowRight,
  faSearch,
  faChevronRight,
  faHeart,
  faMusic,
  faExpandAlt,
  faRedo,
  faRandom,
  faStepBackward,
  faStepForward,
  faPlay,
  faPause,
  faVolumeUp,
  faVolumeMute,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import fire from "../../assests/img/fire.png";
import SpotifyWebApi from "spotify-web-api-node";
// import useAuth from "./useAuth";
import axios from "axios";
import TrackSearchResult from "../TrackSearchResult";
// import TrackSearchResult from './components/TrackSearchResult';


const spotifyApi = new SpotifyWebApi({
  clientId: "b96da533c0594f8f8f3c622613e70b64",
});

function Main({ code }) {
  const [token, setToken] = useState("")
  const [artists, setArtists] = useState([])
  const [searchKey, setSearchKey] = useState("");
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [accessToken, setAccessToken] = useState("");


  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    let cancel = false;
    if (!search) return setSearchResults([]);
    if (!accessToken) return;
    spotifyApi.searchTracks(search).then((res) => {
      if (cancel) return
      setSearchResults(
        res.body.tracks.items.map((track) => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image;
              return smallest;
            },
            track.album.images[0]
          );
          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUri: smallestAlbumImage.url,
          };
        })
      );
    });
    return () => cancel = true
  }, [search, accessToken]);
  
  
  const searchArtists = async (e) => {
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            q: searchKey,
            type: "artist"
        }
    })

    setArtists(data.artists.items)
}

  return (
    <div id="main-content">
      <header>
        <nav className="main-content__header-nav">
          <span>
            {/* <FontAwesomeIcon icon={faBars}></FontAwesomeIcon> */}
            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </span>
        </nav>
        <div className="main-content__search-form">
          <FontAwesomeIcon
            icon={faSearch}
            className="search-btn"
          ></FontAwesomeIcon>
          <form onSubmit={searchArtists}>
            <input
              type="text"
              className="search-input"
              placeholder="Search for artist, songs....." value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
        {/* <FontAwesomeIcon icon={faBars}></FontAwesomeIcon> */}
      </header>

      <p className="main-content__des">
        What's hot
        <span>
          <img src={fire} alt="fire" width="16px" height="17px" />
        </span>
      </p>
      <div className="main-content__trend">
        <div className="main-content__trend-title">Trending</div>
        <div className="main-content__trend-more btn-hover">
          More
          <span>
            <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
          </span>
        </div>
      </div>
      <div className="main-content__banner">
        <p className="main-content__banner-artist">Artist</p>
        <h4 className="main-content__banner-des">On Top Of The World</h4>
        <div className="main-content__banner-btn">
          <button className="play-btn">PLAY</button>
          <button className="follow-btn">FOLLOW</button>
        </div>
        <span className="main-content__view">
          Monthly listeners
          <p>50.000</p>
        </span>
      </div>
      <div className="my-playlist">
        <div className="playlist-head">
          <h4>My Playlist</h4>
          <a className="btn-hover">Show all</a>
        </div>
        <div className="playlist-list">
          <div className="playlist playlist-list__title">
            <p className="playlist__number">#</p>
            <p className="playlist__title">TITLE</p>
            <p className="playlist__artist">ARTIST</p>
            <p className="playlist__time">TIME</p>
          </div>

          {searchResults.map(track => (
            <TrackSearchResult track={track} key={track.uri} />
            ))}
          {/* <div>
              <table>
                <tr>
                  <th><MdFormatQuote /></th>
                  <th>TITLE</th>
                  <th>ARTIST</th>
                  <th>TIME</th>
                  <th>ALBUM</th>
                </tr>
                  {
                    Data.map(item => (
                          <tr>
                          <td>{item.id}</td>
                          <td>{item.title}</td>
                          <td>{item.Artist}</td>
                          <td>{item.time}</td>
                          <td>{item.Album}</td>
                          </tr>
                    ))
                  }
             </table>
              </div> */}
        </div>
      </div>

      <div className="play-song">
        <div className="play-control">
          <div className="play-control__act">
            <FontAwesomeIcon icon={faHeart} id="heart"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faExpandAlt}></FontAwesomeIcon>
          </div>
          <div className="play-control__main">
            <FontAwesomeIcon icon={faRedo}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStepBackward}></FontAwesomeIcon>
            {/* <FontAwesomeIcon icon={faPlay} id='play'></FontAwesomeIcon> */}

            <span className="play-inner">
              <FontAwesomeIcon icon={faPlay} id="play"></FontAwesomeIcon>
            </span>
            <FontAwesomeIcon icon={faStepForward}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faRandom}></FontAwesomeIcon>
          </div>
          <div className="play-control__volume">
            <FontAwesomeIcon icon={faVolumeUp}></FontAwesomeIcon>
            <input
              type="range"
              id="volume"
              className="volume"
              value="1"
              min="0"
              max="1"
              step="0.1"
            />
          </div>
        </div>
        <div class="play-seekbar">
          <div class="timer__left">0:00</div>
          <input type="range" name="range" id="range" class="range" />
          <audio src="./assests/mp3/ntt.mp3" id="song"></audio>
          <div class="timer__right">3.00</div>
        </div>
      </div>
    </div>
  );
}
export default Main;
