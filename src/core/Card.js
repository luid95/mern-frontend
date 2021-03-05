import React, { useState } from 'react';
import './Card.css';
import ShowImage from './ShowImage';

const Card = ({videogame}) => {

    const [count, setCount] = useState(videogame.count);

    return(
        <div className="card m-10 card-cont">
            <div>
                <ShowImage className="img" item={videogame} url="video-game" />
                <h2>{videogame.name}</h2>
                <p><strong>$ {videogame.price}</strong></p>
                <p>{videogame.description}</p>
                <button className="btn btn-success">Ver mas</button>
            </div>
        </div>
    );
}

export default Card;