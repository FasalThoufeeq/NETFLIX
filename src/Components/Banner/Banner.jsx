// import React from 'react'
import { useEffect } from 'react'
import'./Banner.css'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constant/constant'
import { useState } from 'react'

function Banner() {
    const [movie, setMovie] = useState([])
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((resposnse)=>{
            console.log(resposnse.data.results[0]);
            setMovie(resposnse.data.results[3])
        })
    },[])
  return (
    <div style={{backgroundImage:`url(${imageUrl+ movie?.backdrop_path})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie?.title}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h4 className='discription'>{movie?.overview}</h4>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner