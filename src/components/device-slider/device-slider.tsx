import styles from "./device-slider.module.scss";
import variables from "../../styles/variables.module.scss";
import { SwiperSlide, Swiper } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import classNames from "../../utils/classnames";
import Button from "../button/button";
import { IconArrowRight } from "../icons/arrow-right";
import { IconArrowLeft } from "../icons/arrow-left";
import { useRef, useState } from "react";
import { DeviceInfo } from "../../types/device-info";
import { Status } from "../../types/status";
import { ClipLoader } from "react-spinners";

interface Props {
  className?: string;
  onChange?: (selectedDevice: number) => void;
  devicesInfo: DeviceInfo[];
  devicesInfoStatus: Status;
}
export default function DeviceSlider(props: Props) {
  const [selectedDevice, setSelectedDevice] = useState(-1);

  const swiperRef = useRef<SwiperType | null>(null);
  const handlePrevClick = () => {
    swiperRef.current?.slidePrev(); // Navigate to previous slide
  };
  const handleNextClick = () => {
    swiperRef.current?.slideNext(); // Navigate to next slide
  };

  const buttonsDisabled =
    props.devicesInfoStatus !== "succeeded" || !props.devicesInfo.length;

  return (
    <div {...classNames(styles.slider, props.className ?? "")}>
      <Button
        className={styles.buttons}
        theme="transparent"
        onClick={handlePrevClick}
        disabled={buttonsDisabled}
      >
        <IconArrowRight />
      </Button>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className={styles.swiper}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={10}
      >
        {props.devicesInfoStatus === "succeeded" ? (
          props.devicesInfo.map((device, i) => (
            <SwiperSlide className={styles.swiperSlide} key={i}>
              <Button
                className={styles.deviceButton}
                color={
                  selectedDevice === device.deviceId
                    ? "primary"
                    : "bg_secondary"
                }
                onClick={() => handleChange(device.deviceId)}
              >
                {device.deviceName}
              </Button>
            </SwiperSlide>
          ))
        ) : props.devicesInfoStatus === "loading" ? (
          <SwiperSlide className={styles.swiperSlide}>
            <div {...classNames(styles.deviceCard, styles.loading)}>
              <span>بارگیری دستگاه ها</span>
              <ClipLoader color={variables.primaryColor} loading size={20} />
            </div>
          </SwiperSlide>
        ) : (
          <SwiperSlide className={styles.swiperSlide}>
            <div {...classNames(styles.deviceCard, styles.faild)}>
              در بارگیری داده ها اشکالی پیش امده!
            </div>
          </SwiperSlide>
        )}
      </Swiper>
      <Button
        theme="transparent"
        className={styles.buttons}
        onClick={handleNextClick}
        disabled={buttonsDisabled}
      >
        <IconArrowLeft />
      </Button>
    </div>
  );

  function handleChange(deviceId: number) {
    setSelectedDevice(deviceId);
    if (props.onChange) props.onChange(deviceId);
  }
}
