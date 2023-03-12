import React from 'react'
import { MdFormatQuote } from 'react-icons/md'
import{data} from'./components/data'

const PlayList = () => {
  return (
    <div>
        <div className="playlist">
              <span style={{display:'flex', justifyContent:'space-between'}}>
              <h1>My Playlist</h1>
              <p style={{fontSize: '13px', fontWeight: '600', paddingTop: '10px',
            color:"#89898A"
            }}>Show All</p>
              </span>
              <div>
              <table>
                <tr>
                  <th><MdFormatQuote /></th>
                  <th>TITLE</th>
                  <th>ARTIST</th>
                  <th>TIME</th>
                  <th>ALBUM</th>
                </tr>
                  {
                    data.map(item => (
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
              </div>
            </div>
    </div>
  )
}

export default PlayList