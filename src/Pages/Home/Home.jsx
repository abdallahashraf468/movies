import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { moviesAction } from '../../store/slices/movies';
import { homecover } from "../../assets/index"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../../styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/virtual';
import Button from '@mui/material/Button';
import { useState } from 'react';




export default function Home() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const [page, setPage] = useState(1);
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(moviesAction(page));
  }, [dispatch, page]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };










  return (
    <>

      <div className='bg-Zinc-100 '>
        <div className='relative'>
          <p className='font-bold text-white text-2xl absolute top-20 left-72 '>
            <p className='mx-12 text-5xl py-4'>
              Welcome. </p>

            <p className=' mx-12 py-3'>  Millions of movies, TV shows and people to discover. Explore now.</p></p>
          <img src={homecover} className='bg-cover bg-center' alt="" />

        </div>

        <Swiper

          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 80,
            stretch: 0,
            depth: 90,
            modifier: 7,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper mt-12 mb-20"
        >
          {movies.map((movie, index) => (
            <SwiperSlide key={index} virtualIndex={index} onClick={() => navigate(`/details/${movie.id}`)}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                style={{ borderRadius: '20px' }}

              />
            </SwiperSlide>
          ))}
        </Swiper>


        <div className='flex justify-around py-8'>
          <Button className=" w-28"
            color="secondary"
            onClick={handlePrevPage}
            disabled={page === 1}
            variant="contained"

          >
            Prev
          </Button>
          <Button

            className=" w-28"
            variant="contained"
            onClick={handleNextPage}
            color="success"
          >
            Next
          </Button>
        </div>

      </div>

    </>
  );
}
