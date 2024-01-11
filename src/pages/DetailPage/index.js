import axios from '../../api/axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DetailPage = () => {
  const { movieId } = useParams();
  console.log(movieId);

  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `/movie/${movieId}`
      )
      console.log(response);
      setMovie(response.data)
    }
    fetchData()
  }, [movieId])

  if (!movie) {
    return null;
  }

  return (
    <section>
      <img className='modal-poster-img'
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt='img'
      />
      <div>{movie.overview}</div>
    </section>
  )
}

export default DetailPage