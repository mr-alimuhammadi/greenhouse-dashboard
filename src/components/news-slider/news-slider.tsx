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
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
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
            <h3 className={styles.title}>گلخانه</h3>
            <p className={styles.subtitle}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div
            className={styles.newsCard}
            style={{
              backgroundImage: "url('/static/images/greenhouse-1.webp')",
            }}
          >
            <h3 className={styles.title}>مدیریت گلخانه</h3>
            <p className={styles.subtitle}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div
            className={styles.newsCard}
            style={{
              backgroundImage: "url('/static/images/greenhouse-2.jpg')",
            }}
          >
            <h3 className={styles.title}>گلخانه هوشمند</h3>
            <p className={styles.subtitle}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div
            className={styles.newsCard}
            style={{
              backgroundImage: "url('/static/images/greenhouse-3.jpg')",
            }}
          >
            <h3 className={styles.title}>ساز و ساخت گلخانه ها</h3>
            <p className={styles.subtitle}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div
            className={styles.newsCard}
            style={{
              backgroundImage: "url('/static/images/greenhouse-4.jpg')",
            }}
          >
            <h3 className={styles.title}>مدیریت آنلاین گلخانه</h3>
            <p className={styles.subtitle}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div
            className={styles.newsCard}
            style={{
              backgroundImage: "url('/static/images/greenhouse-5.jpg')",
            }}
          >
            <h3 className={styles.title}>تزئین گلخانه</h3>
            <p className={styles.subtitle}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div
            className={styles.newsCard}
            style={{
              backgroundImage: "url('/static/images/greenhouse-6.jpg')",
            }}
          >
            <h3 className={styles.title}>اینترنت اشیاء در گلخانه ها</h3>
            <p className={styles.subtitle}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
