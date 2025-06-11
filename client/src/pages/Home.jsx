import React from 'react'
import MovieCard from '../components/MovieCard'

const Home = () => {

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

  return (
    <div className='home'>
        <div className="movies-grid">
            {movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)}
        </div>
    </div>
  )
}

export default Home