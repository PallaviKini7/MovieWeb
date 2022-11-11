import React, { useEffect } from 'react'
import movieApi from '../../common/apis/movieApi'
import { APIKey } from '../../common/apis/movieApiKey'
import MovieListing from '../movieListing/movieListing'
import { useDispatch } from 'react-redux'
import { addMovies } from '../../features/movies/movieSlice'
import { Link } from 'react-router-dom'

const Home = () => {
  const dispatch = useDispatch()
  const movieText = "Harry"

  useEffect(() => {
    const fetchApi = async() => {
      const response = await movieApi
        .get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("Error : ", err)
        });
        console.log(response.data);
        dispatch(addMovies(response.data))
    }
    fetchApi();
  },[])


  // useEffect(() => {
  //   const options = {
  //     method: 'GET',
  //     url: 'https://imdb8.p.rapidapi.com/auto-complete',
  //     params: { q: 'harry' },
  //     headers: {
  //       'X-RapidAPI-Key': '2e725ad90amsh3d5d47978596bc2p1706fajsn48ee22c4fd8c',
  //       'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
  //     }
  //   };

  //   axios.request(options).then(function (response) {
  //     dispatch(addMovies(response.data))
  //   }).catch(function (error) {
  //     console.error(error);
  //   });


  // }, [])
  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing />
    </div>

  )
}

export default Home