import React from 'react'
import MovieCard from './MovieCard'
import { movie } from '../Movie'
const MoviList = () => {
  return (
    <div style={{display:"flex",gridGap:"5px"}}>
        { movie.map((movie)=><MovieCard Title={movie.Title} Description={movie.Description} PosterUrl={movie.PosterUrl} Rating={movie.Rating} />)}
    </div>
  )
}

export default MoviList