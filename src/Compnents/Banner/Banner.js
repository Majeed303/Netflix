import React, { useEffect, useState } from 'react'
import axios from '../axios'
import { API_KEY } from "../constact/constact"
import { imageUrl } from '../constact/constact'

import "./Banner.css"

function Banner() {

   const [movie, setMovie] = useState([])
   const [showVideo, setShowVideo] = useState(false)
   useEffect(() =>{
       axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            setMovie(response.data.results[4]);
            
       }) 
   }, []);
   console.log(movie);

   const handleplay = () => {
    setShowVideo(true);
}

  return (
    <div
    className='Banner'
    style={{
        backgroundImage: `url(${showVideo ? '' : (movie ? imageUrl+movie.backdrop_path : '')})`,
        backgroundSize: showVideo ? 'cover' : '',
        backgroundPosition: showVideo ? 'center' : 'top',
    }}
>

     <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>

         <div className='banne-button'>
            <button className='button' onClick={handleplay}>Play</button>
            <a href='#row'>      
  <button className='button'>My list</button>
</a>
          </div>
          
         <h1  className='descriptoin'>{movie ? movie.overview : ""}</h1>
     </div>
     

       
    </div>
  )
}

export default Banner
