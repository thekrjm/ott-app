import axios from '../../api/axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './SearchPage.css'
import { useDeBounce } from '../../hooks/useDeBounce'

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([])

  const useQuery = () => {
    return new URLSearchParams(useLocation().search)
  }

  const query = useQuery();
  const searchTerm = query.get("q")

  const debouncedSearchTerm = useDeBounce(searchTerm, 500)

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchSearchMovie(debouncedSearchTerm)
    }
  }, [debouncedSearchTerm])

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const response = await axios.get(`/search/multi?include_adult=false&query=${searchTerm}`)
      setSearchResults(response.data.results)
      console.log(response.data.results[0]);
    } catch (error) {
      console.log(error);
    }
  }

  if (searchTerm.length > 0) {
    return (
      <section className='search-container' >
        {searchResults.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== "person") {
            const movieImageUrl = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
            return (
              <div className='movie' key={movie.id}>
                <div className='movie-column-poster' onClick={() => navigate(`/${movie.id}`)} >
                  <img src={movieImageUrl} alt='movie' className='movie-poster' />
                </div>
              </div>
            )
          }
        })}
      </section>
    )
  } else {
    return (
      <section className='no-result'>
        <div className='no-result-text'>
          <p>
            검색하신 "{searchTerm}"은 검색결과에 없습니다.
          </p>
        </div>
      </section>
    )
  }
}

export default SearchPage;