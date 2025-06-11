import React from 'react'

const MovieCard = ({ movie }) => {

  function onFavoriteClick() {
    alert('clicked') // Show an alert box as feedback (you can customize this action later)
  }

  return (
    <div className="movie-card" style={{border: '1px solid white', padding: '1rem', borderRadius: '0.5rem'}}>
      {/* Movie poster section */}
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} style={{height: '10rem'}}/>
        
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
