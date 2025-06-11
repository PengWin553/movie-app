// Importing React and necessary hooks
import React, { useState } from 'react'
// Importing the MovieCard component for displaying individual movie info
import MovieCard from '../components/MovieCard'

const Home = () => {

    // Array of movie objects (mock/static data)
    const movies = [
        {
            id: 1,
            title: "Bocchi the Rock",
            release_date: "2023",
            url: 'https://i.pinimg.com/originals/0e/0a/f3/0e0af37e3cc1d48ef19bd51973c49719.jpg',
        },
        {
            id: 2,
            title: "Miss Kobayashi's Dragon Maid",
            release_date: "2017",
            url: 'https://vignette.wikia.nocookie.net/maid-dragon/images/5/52/Kobayashi_5.png/revision/latest?cb=20170315190544',
        },
        {
            id: 3,
            title: "Rock is a Lady's Modesty",
            release_date: "2025",
            url: 'https://static.animecorner.me/2025/03/1741257301-bfbff2c8216c6cdc6db7b290a2df5e64.jpg',
        },
        {
            id: 4,
            title: "Minecraft the Movie",
            release_date: "2025",
            url: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2022/08/Minecraft-Movie-Temp-Poster.jpg',
        },
    ]

    // State to store the user's search query
    const [searchQuery, setSearchQuery] = useState("");

    // Function to handle the form submission event
    const handleSearch = (e) => {
        e.preventDefault(); // Prevents page reload when form is submitted
        alert(searchQuery); // Displays the current search query in an alert (for testing)
        setSearchQuery("Search for another movie..."); // Optionally updates the input field
    }

    return (
        <div className='home'>

            {/* Search form */}
            <form onSubmit={handleSearch} className='search-form'>
                <input 
                    type="text" 
                    placeholder='Search for movies...' 
                    className='search-input' 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} // Updates state as user types
                />
                <button type='submit' className='search-button'>Search</button>
            </form>

            {/* Movie cards displayed in a grid */}
            <div className="movies-grid">
                {movies.map((movie) => (
                    // Render MovieCard only if movie title starts with search query (case-insensitive)
                    movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) &&
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    )
}

// Exporting Home component as default
export default Home