// Importing React since we are using JSX
import React from 'react'

// MovieCard is a functional component that receives a 'movie' prop
const MovieCard = ({ movie }) => {

  // Function that will be called when the favorite button is clicked
  function onFavoriteClick() {
    alert('clicked') // Show an alert box as feedback (you can customize this action later)
  }

  return (
    <div className="movie-card">
      {/* Movie poster section */}
      <div className="movie-poster" style={{border: '1px solid white', padding: '1rem', borderRadius: '0.5rem'}}>
        {/* Display the movie's poster image using the 'url' from the movie prop */}
        <img src={movie.url} alt={movie.title} style={{height: '10rem'}}/>
        
        {/* Overlay that appears on top of the poster (usually for interactive elements) */}
        <div className="movie-overlay">
          {/* Favorite button with a heart icon that triggers onFavoriteClick when clicked */}
          <button className='favorite-btn' onClick={onFavoriteClick}>
            ♥️
          </button>
        </div>
      </div>

      {/* Movie information section (title and release date) */}
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  )
}

// Exporting the MovieCard component so it can be used in other parts of the app
export default MovieCard
