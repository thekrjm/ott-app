import axios from '../api/api_key'
import React, { useEffect, useState } from 'react'
import request from "../api/request"
import "./Banner.css"
import styled from 'styled-components'

const Banner = () => {
  const [movie, setMovie] = useState([])
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await axios.get(request.fetchNowPlaying);
    const movieId = response.data.results[
      Math.floor(Math.random() * response.data.results.length)
    ].id

    const { data: movieDetail } = await axios.get(`/movie/${movieId}`, {
      params: { append_to_response: "video" }
    })
    setMovie(movieDetail)
  }

  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n) + "..." : str;
  }


  if (isClicked) {
    return (
      <Container>
        <HomeContainer>
          <Iframe
            src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen"
          ></Iframe>
        </HomeContainer>
        <buttton onClick={() => setIsClicked(false)} >닫기</buttton>
      </Container>
    )
  } else {


    return (
      <header
        className='banner'
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
          height: "500px"
        }}>
        <div className='banner_contents' >
          <h1 className='banner_title' >
            {movie.title || movie.original_title}
          </h1>
          <div className='banner_buttons' >
            {movie?.videos?.results[0].key &&
              <button className='banner_button play' onClick={() => setIsClicked(true)} >
                play
              </button>}
          </div>
          <p className='banner_description'>
            {truncate(movie.overview, 100)}
          </p>
        </div>
      </header>
    )
  }
}



export default Banner

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1; 
  opacity: 0.65;
  border: none;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;