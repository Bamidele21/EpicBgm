
import "./sidebar.css"
import {FaArrowRight, FaHome, FaSearch, FaPlus } from "react-icons/fa";
import { BiLibrary } from "react-icons/bi";
import { Link } from "react-router-dom";







function Sidebar() {

    return (
        <>
        <div className ="sidebar-container">
            <div className="navbar">
            <div className="side-content">
                <FaHome />
               <Link to ="/"> <p>Home</p></Link>
                


            </div>
            <div className="side-content">
                <FaSearch/>
                <p>Search</p>
                    

            </div>
            </div>
            <div className="lib-container">
                <div className="lib-content side-content">
                    
                
                <BiLibrary />
                <p>Library</p>
                    <div className="lib-icons">
                    <FaArrowRight/><FaPlus/>
                    </div>
                </div>
                <div className="list-content ">
                    <h3>Create your first Epic Playlist</h3>
                    <p>Add songs from the search or your library</p>
                    <button>Create Playlist</button>


                </div>
                <div className="list-content">
                    <h3>Find an BossCast</h3>
                    <p>tips and tricks from gaming veterans to help you get past that boss your struggling against </p>
                    <button>Find Podcast</button>
                </div>
            </div>

        </div>
        
        </>


    )
}

export default Sidebar;