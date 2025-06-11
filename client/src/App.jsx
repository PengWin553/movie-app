// Importing the CSS file for global styling
import './App.css'

// Importing the MovieCard component from the components directory
import MovieCard from './components/MovieCard'

// Main App component
function App() {

  return (
    // React Fragment used as a wrapper because JSX elements must be wrapped in a single parent
    <>
      {/* Rendering two MovieCard components with different movie props */}
      {/* outer curly brace denotes a variable, inner curly brace denotes an object  */}
      <MovieCard movie={{ title: "Cat's Movie", release_date: "2024" }} />
      <MovieCard movie={{ title: "Mae's Movie", release_date: "2025" }} />
    </>
  )
}

// Exporting the App component as the default export of this file
export default App
