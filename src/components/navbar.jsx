import "./navbar.css"
import { FaChevronCircleLeft, FaChevronCircleRight} from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar () {

    return (
        <>
        <div className="nav-container">
            <div className="navigation">
                <Link to ="/"><FaChevronCircleLeft /></Link>
                <FaChevronCircleRight/>
            </div>
            <div className="filter-container">
                <button className="all">All Content</button>
                <button>Music</button>
                <button>BossCasts</button>
            </div>



        </div>
        
        
        
        </>
    
    )
}

export default Navbar;