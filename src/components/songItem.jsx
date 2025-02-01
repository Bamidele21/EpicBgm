import { useContext } from "react";
import "./songitem.css"
import { PlayerContext } from "../context/playercontext";



function SongItem({title, image, artist, album, id}) {
//song item props//
    const {idPlay} = useContext(PlayerContext)
    return (
        <>
        <div onClick={()=>idPlay(id)} className="song-item">
            <img src={image} height = "200px" width = "280px" alt={title} />
            <h4>{title}</h4>
            <p>{artist} - {album}</p>





        </div>
        
        
        
        
        </>


    )
}

export default SongItem;