import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import '../../styles.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Favorites = () => {
    const favorites = useSelector((state) => state.favorites.favorite);
  
    return (
        <div className="mt-4 mb-28">
          <p className="text-2xl font-bold text-center  "> My Favorite</p>

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
    className="mySwiper mt-20 mb-20"
>
  {favorites.map((movie) => (
    <SwiperSlide key={movie.id}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        style={{ width: '240px', height: '320px', objectFit: 'cover' }}
      />
    </SwiperSlide>
  ))}
</Swiper>

        </div>
    );
};

export default Favorites;
