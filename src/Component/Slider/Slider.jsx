import React, { useState } from "react";
import styles from './Slider.module.css';
import { Images } from "../../Share/Map";

const Carousel = () => {
  const images = Images;
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toImage = (imgNum) => {
    setCurrentImage(imgNum);
  };

  const nextImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImage((currentImage + 1) % images.length);
        setIsTransitioning(false);
      }, 300); // Adjust the delay time as needed
    }
  };

  const prevImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImage((currentImage - 1 + images.length) % images.length);
        setIsTransitioning(false);
      }, 300); // Adjust the delay time as needed
    }
  };

  return (
    <div className={styles.carousel}>
      <div className={styles["image-container"]}>
        <div
          className={styles["image-slider"]}
          style={{
            transform: `translateX(-${currentImage * 100}%)`,
          }}
        >
          {images.map((image) => (
            <div key={image.id} className={styles["image-wrapper"]}>
              <img
                src={image.src}
                alt={`${image.id}`}
                className={
                  parseInt(image.id) === parseInt(currentImage) ? `${styles.active}` : ""
                }
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.btn}>
        {images.map((image) => (
          <button key={image.id} onClick={() => toImage(image.id)}></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;