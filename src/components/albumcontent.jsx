

import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AlbumData, SongData } from '../assets/assets';
import "./albumcontent.css"
import { PlayerContext } from '../context/playercontext';


function AlbumContent () {

    const { id } = useParams();

    const albumData = AlbumData[id]
    const {idPlay} = useContext(PlayerContext)


    return (
        <div className= "data-container">
            <div className="stat-container" >
            <img src={albumData.image} height="300px" width="450px" alt=""/>
            <div className="stat-content">
            <p>Playlist</p>
            <h1>{albumData.title}</h1>
            <h4>{albumData.discription}</h4>
            <p><b>EpicBGM</b> &#8226; 8,323,308,004 plays &#8226; about 0 hr 55 min</p>
            </div>
            </div>
            
            <div className="track-container">
                <p>Title</p>
                <p>Artist</p>
                <p>Album</p>
            </div>
            <hr/>
            <div className="songtrack-container">
            {
                SongData.map((item, index)=>(
                    <div onClick={()=>idPlay(item.id)}  className="song-list" key={index}>
                        <p><img src={item.image} height="50px"/> <span>{item.title}</span></p>
                        <p className="song-info">{item.artist}</p>
                        <p className="song-info">{item.album}</p>

                    </div>
                ))
            }
            </div>

        </div>
    );

}

export default AlbumContent