import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovie, getAllShows } from '../../features/movies/movieSlice';
import MovieCard from '../movieCard/movieCard';
import './movieListing.scss'

const MovieListing = () => {
  let renderMovie = "";
  let renderShows = "";
  const movies = useSelector(getAllMovie);
  const shows = useSelector(getAllShows);

  renderMovie = movies.Response === "True" ?
    (movies.Search.map((movie, index) => {
      return <MovieCard key={index} data={movie} />;
    }))
    :
    (<div className="movies-error">
      <h3>{movies.Error}</h3>
    </div>
    )
  
    renderShows = shows.Response === "True" ?
    (shows.Search.map((movie, index) => {
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
      <div className='show-list'>
        <h2>Shows</h2>
        <div className='show-container'>{renderShows}</div>
      </div>

    </div>
    
    
  )

};

export default MovieListing