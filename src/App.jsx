import React, {useContext} from "react"
import './App.css'
import Sidebar from "./components/sidebar"
import Player from "./components/player"
import Display from "./components/display"
import { PlayerContext } from "./context/playercontext"
function App() {
  
const {audioRef, track} = useContext(PlayerContext)


  return (
    <>
    <div className="app-container">
    
      <Sidebar/>
      <Display/>

   
     
     
     
      </div> 
      <Player/>
      <audio ref={audioRef} src={track.songfile} preload='auto'></audio>
    </>
  )
}

export default App
