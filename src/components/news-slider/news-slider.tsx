import styles from "./news-slider.module.scss";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function NewsSlider() {
  return (
    <div className={styles.slider}>
      <Swiper
        className={styles.swiper}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
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
            <h3 className={styles.title}>Greenhouse</h3>
            <p className={styles.subtitle}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
              ullam quas repellendus minima, corporis necessitatibus
              reprehenderit consequatur enim incidunt quibusdam?
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
            <h3 className={styles.title}>Greenhouse Manager</h3>
            <p className={styles.subtitle}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
              exercitationem maiores consectetur soluta blanditiis. Explicabo?
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
            <h3 className={styles.title}>Smart Greenhouse</h3>
            <p className={styles.subtitle}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
              voluptas repudiandae ab expedita temporibus iste. Quis quia eos
              blanditiis harum ipsam ut nemo nulla minima!
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
            <h3 className={styles.title}>Greenhouse Buildings</h3>
            <p className={styles.subtitle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem, ex?
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
            <h3 className={styles.title}>Greenhouse Online Management</h3>
            <p className={styles.subtitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              doloribus dolorem et tempore nesciunt architecto. Ea ad rerum
              labore? Fugiat.
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
            <h3 className={styles.title}>Greenhouse Decoration</h3>
            <p className={styles.subtitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus nemo assumenda inventore. Velit ducimus modi nihil,
              enim vel quia culpa distinctio dicta, ea minima eos voluptates
              rem, veniam officiis!
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
            <h3 className={styles.title}>IoT in Greenhouse</h3>
            <p className={styles.subtitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              accusamus, numquam in fugit repellat tempora quas, suscipit
              magnam, odio voluptatibus animi neque adipisci obcaecati possimus!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
