import React, { useEffect } from 'react'
import movieApi from '../../common/apis/movieApi'
import { APIKey } from '../../common/apis/movieApiKey'
import MovieListing from '../movieListing/movieListing'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchAsyncMovies } from '../../features/movies/movieSlice'
import { fetchAsyncShows } from '../../features/movies/movieSlice'

const Home = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchAsyncMovies())
    dispatch(fetchAsyncShows())
    
    
  },[dispatch]);

  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing />
    </div>

  )
}

export default Home