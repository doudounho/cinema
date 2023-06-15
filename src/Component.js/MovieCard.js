import React from 'react'

const MovieCard = ({Title,Description,PosterUrl,Rating}) => {
  return (
    <div>
            <img src={PosterUrl} alt={Title} />
            <h2> {Title} </h2>
            <span> {Rating} </span>
            <span> {Description} </span>
        </div>
  )
}

export default MovieCard