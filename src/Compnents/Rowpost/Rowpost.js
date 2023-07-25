import React, { useEffect, useState } from 'react'
import axios from '../axios';
import {imageUrl,API_KEY } from '../constact/constact';
import "./Rowpost.css"
import YouTube from 'react-youtube';

function Rowpost(props) {
  const [movie, setMovie] = useState([])
  const [urlid, seturlid]=useState('')
  const [playing, setPlaying] = useState(false);
  
   useEffect (()=>{
    axios.get(props.url).then((response)=>{
       console.log(props.url)
      setMovie(response.data.results);
    })
   }, []);

   const opts ={
    height : '390',
    width :  '100%',
    playerVars:{
      autoplay: 1,
    }
   }

   const handlemovie = (id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-us`).then((response)=>{
         if(response.data.results.length !==0){
           setPlaying(true);
           seturlid(response.data.results[0])
           
         }else{
          seturlid('watch?v=dR8kF7jq_gQ')
          setPlaying(true);
         }
    })  .catch((error) => {
      seturlid("watch?v=dR8kF7jq_gQ");
      setPlaying(true);
      console.log(error);
        });
   }

  const handleClose = () => {
    setPlaying(false);
  };
  
  return (
    <div className='row' id='row'>
      <h2>{props.title}</h2>

      <div className={props.isSmall ? "smallposter" : 'posters' } >
        {movie.map((obj)=><img onClick={()=>handlemovie(obj.id)} className='poster' src={`${imageUrl+obj.backdrop_path}`}   alt="poster" /> 
        ).reverse()}      
      </div>

     {playing && (
        <div className="video-player">
          <div className="video-player-inner">
          <button className="close-button" onClick={handleClose}>
              X
            </button>
            <YouTube opts={opts} videoId={urlid.key} />
            
          </div>
        </div>
      )}
    </div>
  );
}

export default Rowpost
