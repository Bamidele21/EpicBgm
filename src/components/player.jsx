import "./player.css"

import { CiPlay1, CiPause1, CiStop1, CiMicrophoneOn, CiMicrophoneOff } from "react-icons/ci";
import { IoIosSkipBackward, IoIosSkipForward,IoIosRepeat, IoIosShuffle, IoIosVolumeLow, IoIosVolumeHigh, IoIosVolumeOff } from "react-icons/io";
import { MdOutlineQueue, MdSpeakerGroup } from "react-icons/md";
import { CgMiniPlayer } from "react-icons/cg";
import { ImEnlarge2 } from "react-icons/im";
import { useContext } from "react";
import { PlayerContext } from "../context/playercontext";



function Player() {
    
    
    const {track, seekBar, SeekBg, isPlaying, play, pause, trackTime, prev, next, seekSong} = useContext(PlayerContext)
    
    
    return (

        

    <>
    <div className="player-container">
        <div className="songplayer-container">
            <div className="song-img">
                <img src={track.image} height="72px" alt={track.title} />

            </div>
            <div className="song-details">
                <h3>{track.title}</h3>
                <p>{track.album}</p>

            </div>

        </div>
        <div className="controls-container">
            <div className="control-buttons">
                <IoIosShuffle/>
                <IoIosSkipBackward onClick={prev}/>
                {isPlaying ?<CiPause1 onClick={pause}/>:<CiPlay1 onClick={play}/>}
                
                
                <IoIosSkipForward onClick={next}/>
                <IoIosRepeat/>
            </div>
            <div className="progress-bar">
                <p>{trackTime.currentTime.minutes}:{trackTime.currentTime.seconds}</p>
                <div ref={SeekBg} onClick={seekSong}className="progress-filler">
                    <hr ref={seekBar}/>

                </div>
                <p>{trackTime.duration.minutes}:{trackTime.duration.seconds}</p>
            </div>    
    

        </div>
        <div className="volume-container">
            <CiMicrophoneOn/>
            <MdOutlineQueue/>
            <MdSpeakerGroup/>
            <div className="volume-bar"/>
            <CgMiniPlayer/>
            <ImEnlarge2/>

            

        </div>




        
    </div>
    </>


    )
}

export default Player;