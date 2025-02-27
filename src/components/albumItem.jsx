import React from "react";
import "./albumItem.css"
import { useNavigate } from "react-router-dom";


function AlbumItem({title, image, discription, id}) {

 const navigate = useNavigate()

    return (
        <>
        <div className="album-item" onClick={()=>navigate(`/album/${id}`)}>
            
            <img src={image} alt=""/>
            <h3>{title}</h3>
            <p>{discription}</p>






        </div>



        </>
    )

}

export default AlbumItem;