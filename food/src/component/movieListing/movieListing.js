import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovie } from '../../features/movies/movieSlice';
import MovieCard from '../movieCard/movieCard';
import './movieListing.scss'

const MovieListing = () => {
  let renderMovie = "";
  const movies = useSelector(getAllMovie);

  renderMovie = movies.Response === "True" ?
    (movies.Search.map((movie, index) => {
      return <MovieCard key={index} data={movie} />;
    }))
    :
    (<div className="movies-error">
      <h3>{movies.Error}</h3>
    </div>
    )

  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'>{renderMovie}</div>
      </div>
    </div>
  )

};

export default MovieListing