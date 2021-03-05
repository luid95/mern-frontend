import React from 'react';
import { API } from '../config';
import './ShowImage.css';

const ShowImage = ({item, url}) => {
    return(
        <div className="product-img">
            <img 
                src={`${API}/${url}/get-image-vgame/${item.photo}`}
                alt={item.name}
                className="mb-3 img-cont"
                style={{maxHeight: "600px", maxWidth:"300px" }}
            />
        </div>
    );
}

export default ShowImage;