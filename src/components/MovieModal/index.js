import React, { useRef } from 'react'
import "./MovieModal.css"
import useModalOff from '../../hooks/useModalOff';

const MovieModal = ({ backdrop_path, title, overview, name, release_date, first_air_date, vote_average, setModalOpen }) => {
  const ref = useRef();
  useModalOff(ref, () => {
    setModalOpen(false)
  })
  return (
    <div className='presentation' role='presentation'>
      <div className='wrapper-modal' >
        <div className='modal' ref={ref}>
          <span className='modal-close' onClick={() => setModalOpen(false)} >X</span>
          <img className='modal_poster-img'
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          />
          <div className='modal_content'>
            <p className='modal_details'>
              <span className='modal_user_prec'>100% for you</span>
              {release_date ? release_date : first_air_date}
            </p>
            <h2 className='modal_title'>{title ? title : name} </h2>
            <p className='modal_vote-average'>평점{vote_average}</p>
            <p className='modal_overview'>{overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieModal