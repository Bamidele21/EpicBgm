import { createContext, useRef, useState, useEffect } from "react";
import { SongData } from "../assets/assets";

 export const PlayerContext = createContext();

function PlayerContextProvider(props) {
//provides context for use in all components//
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track, setTrack] = useState(SongData[3])
    const [isPlaying, setIsPlaying] = useState(false);
    const [trackTime, setTrackTime] = useState({
        currentTime: {
            seconds: 0,
            minutes: 0
        },
        duration: {
            seconds: 0,
            minutes: 0
        }
        
    })

    const play = () => {
        
        audioRef.current.play();//plays music//
        setIsPlaying(true)
    }

    const pause = () => {//pauses music//
        audioRef.current.pause();
        setIsPlaying(false)
    }

    const idPlay = async(id) => {//sets the track to the id of the song //
        await setTrack(SongData[id]);
        await audioRef.current.play();
        setIsPlaying(true)
    }

    const prev = async ()=> {//skips to the previous track//
        if (track.id>0 ) {
            await setTrack(SongData[track.id-1]);
            await audioRef.current.play();
            setIsPlaying(true)
        }
    }   

    const next = async ()=> { //skips to the next track//
        if (track.id <SongData.length-1 ) {
            await setTrack(SongData[track.id+1]);
            await audioRef.current.play();
            setIsPlaying(true)
        }
    }   

    const seekSong = async (e) => {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration)

    }

    useEffect(()=>{
        setTimeout(()=>{
            audioRef.current.ontimeupdate = () => {

                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration * 100))+"%"


                setTrackTime(
                    {
                        currentTime: {
                            seconds: Math.floor(audioRef.current.currentTime % 60),
                            minutes: Math.floor(audioRef.current.currentTime / 60)
                        },
                        duration: {
                            seconds: Math.floor(audioRef.current.duration % 60),
                            minutes: Math.floor(audioRef.current.duration / 60)
                        }
                        
                    }
                )
            }

        },1000);
    }, [audioRef])



    const contextValue = {
        audioRef,
        seekBg,
        seekBar,
        track,setTrack,
        trackTime,setTrackTime,
        isPlaying, setIsPlaying,
        play, pause,
        idPlay,
        prev, next,
        seekSong
       

    }
    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;