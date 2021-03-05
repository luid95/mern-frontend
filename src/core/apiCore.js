import {API} from '../config';
import axios from 'axios';

export const getVideogames = () => {
    
    return axios.get(API + `/video-game/videogames`)
    .then(response => {
        //console.log(response);
        return response;
    })
    .catch(err => console.log(err));
}