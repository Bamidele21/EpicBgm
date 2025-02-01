import React from 'react';
import { AlbumData, SongData } from '../assets/assets';
import AlbumItem from '../components/albumItem';
import SongItem from '../components/songItem';
import "./home.css"

function Home() {
    return (
        <>
        <div className="home-container">


          <h1>Featured Collections</h1>
            <div className="album-container">
            {AlbumData.map((item, index)=>(<AlbumItem key={index} title={item.title} discription={item.discription} image={item.image} id={item.id}/>))}
            </div>
            <h1>Today&apos;s Recommended</h1>
            <div className="song-container">
                {SongData.map((item, index)=>(<SongItem key={index} title={item.title} artist={item.artist} image={item.image} album={item.album} id={item.id}/>))}
            
            </div>





        </div>
        
        
        
        
        
        
        </>
    )
}

export default Home;