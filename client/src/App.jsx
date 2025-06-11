// Importing the CSS file for global styling
import './App.css'

// Importing the MovieCard component from the components directory
import MovieCard from './components/MovieCard'

// Main App component
function App() {

  const movieNumber = 1;

  return (
    <>
      {movieNumber === 1 ?
        (
          <MovieCard movie={{ title: "Cat's Movie", release_date: "2024", url: 'https://i.pinimg.com/originals/0e/0a/f3/0e0af37e3cc1d48ef19bd51973c49719.jpg' }} />
        ) 
      :
        (
          <MovieCard movie={{ title: "Mae's Movie", release_date: "2025", url: 'https://vignette.wikia.nocookie.net/maid-dragon/images/5/52/Kobayashi_5.png/revision/latest?cb=20170315190544' }} />
        )
      }
    </>
  )
}

// Exporting the App component as the default export of this file
export default App