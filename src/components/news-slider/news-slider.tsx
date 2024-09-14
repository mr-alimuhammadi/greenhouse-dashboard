import styles from "./news-slider.module.scss";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import classNames from "../../utils/classnames";

interface Props {
  className: string;
}
export default function NewsSlider(props: Props) {
  return (
    <div {...classNames(styles.slider, props.className)}>
      <Swiper
        className={styles.swiper}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={10}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <div
            className={styles.newsCard}
            style={{
              backgroundImage: "url('/static/images/greenhouse-1.jpg')",
            }}
          >
            <h4 className={styles.title}>گلخانه</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div
            className={styles.newsCard}
            style={{
              backgroundImage: "url('/static/images/greenhouse-1.webp')",
            }}
          >
            <h4 className={styles.title}>مدیریت گلخانه</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div
            className={styles.newsCard}
            style={{
              backgroundImage: "url('/static/images/greenhouse-2.jpg')",
            }}
          >
            <h4 className={styles.title}>گلخانه هوشمند</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div
            className={styles.newsCard}
            style={{
              backgroundImage: "url('/static/images/greenhouse-3.jpg')",
            }}
          >
            <h4 className={styles.title}>ساز و ساخت گلخانه ها</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div
            className={styles.newsCard}
            style={{
              backgroundImage: "url('/static/images/greenhouse-4.jpg')",
            }}
          >
            <h4 className={styles.title}>مدیریت آنلاین گلخانه</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div
            className={styles.newsCard}
            style={{
              backgroundImage: "url('/static/images/greenhouse-5.jpg')",
            }}
          >
            <h4 className={styles.title}>تزئین گلخانه</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div
            className={styles.newsCard}
            style={{
              backgroundImage: "url('/static/images/greenhouse-6.jpg')",
            }}
          >
            <h4 className={styles.title}>اینترنت اشیاء در گلخانه ها</h4>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
