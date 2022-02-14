import { CSSProperties, FC } from 'react';
import { Lazy, Navigation, Pagination, Zoom } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

import 'swiper/swiper.min.css';
import 'swiper/modules/lazy/lazy.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';

interface Props {
  imageUrls: string[];
}

export const ImageCarousel: FC<Props> = ({ imageUrls }) => {
  return (
    <Swiper
      style={
        {
          '--swiper-navigation-color': '#999',
          '--swiper-pagination-color': '#739EB4',
        } as CSSProperties
      }
      lazy
      loop
      zoom
      navigation={{}}
      pagination={{ clickable: true }}
      modules={[Zoom, Lazy, Pagination, Navigation]}
    >
      {imageUrls.map((imageUrl, index) => (
        <SwiperSlide key={`${index}-${imageUrl}`}>
          <div
            key={`${index}-${imageUrl}`}
            className="swiper-zoom-container bg-white flex justify-center w-full h-[480px]"
          >
            <img data-src={imageUrl} className="swiper-lazy w-full object-cover" />
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
