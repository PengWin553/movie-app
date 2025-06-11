import React from 'react'
import '../css/MovieCard.css'

const MovieCard = ({ movie }) => {

  function onFavoriteClick() {
    alert('clicked') // Show an alert box as feedback (you can customize this action later)
  }

  return (
    <div className="movie-card">
      {/* Movie poster section */}
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title}/>
        
        <div className="movie-overlay">
          <button className='favorite-btn' onClick={onFavoriteClick}>
            ♥️
          </button>
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  )
}

// Exporting the MovieCard component so it can be used in other parts of the app
export default MovieCard
