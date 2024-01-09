
import axios from '../api/api_key';
import React, { useCallback, useEffect, useState } from 'react'
import "./Row.css"
import MovieModal from './MovieModal/index';

export const Row = ({ title, id, fetchUrl }) => {
  const [moviesData, setMoviesData] = useState([]);
  const [modalOpen, setModalOpen] = useState(true);
  const [movieSelected, setMovieSeleted] = useState({});

  const fetchMovieData = useCallback(async () => {
    const response = await axios.get(fetchUrl);
    setMoviesData(response.data.results)
  }, [fetchUrl])

  useEffect(() => {
    fetchMovieData()
  }, [fetchMovieData])

  const handleClick = (movie) => {
    setModalOpen(true)
    setMovieSeleted(movie)
  }

  console.log("선택", movieSelected);

  return (
    <div>
      <h2>{title}</h2>
      <div className='slider'>
        <div className='slider_arrow-left' onClick={() => document.getElementById(id).scrollLeft += window.innerWidth - 80}>
          <span className='arrow'  >
            {"<"}
          </span>
        </div>
        <div id={id} className='row_posters'>
          {moviesData.map((movie) => (
            <img
              className='row_poster'
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.title}
              onClick={handleClick}
            />
          ))}
        </div>
        <div className='slider_arrow-right' onClick={() => document.getElementById(id).scrollLeft -= window.innerWidth - 80}  >
          <span className='arrow' >
            {">"}
          </span>
        </div>
      </div>
      {modalOpen && <MovieModal {...movieSelected} setModalOpen={setModalOpen} />}
    </div>
  )
}
export default Row