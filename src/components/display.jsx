import "./display.css"
import Navbar from "./navbar";
import Home from "../routes/home";
import {Route, Routes} from 'react-router-dom'
import AlbumContent from "./albumcontent";




function Display() {
    return (
        <div className="display-container">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='album/:id' element={<AlbumContent/>}/>
            </Routes>
            


            
        </div>
    )

}

export default Display;