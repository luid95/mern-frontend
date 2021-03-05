import React, {useEffect, useState} from 'react';
import Navbar from '../layout/Navbar';
import { getVideogames } from './apiCore';

import Card from './Card';

const Home = (res, req) => {

    // state
    const [videogames, setVideogames] = useState([]);
    const [error, setError] = useState(false);

    // api
    const loadVideoGames = () => {
        getVideogames().then(res => {
            console.log(res.data);
            if(res.data.status !== 'success'){
                setError('error');
            }else{

                setVideogames(res.data.games);
                
            }
        })
    }

    useEffect(() => {
        loadVideoGames();
    }, [])

    return(
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    {videogames.map((videogame, i) => (
                        <div key={i} className="col-lg-4 col-md-6 col-sm-6">
                            <Card videogame={videogame} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
