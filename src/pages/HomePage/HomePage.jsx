import { useState } from "react";
import { DocumentTitle } from "../../components/DocumentTitle/DocumentTitle";
import { FirstSlide } from "../../components/HomeSlider/FirstSlide/FirstSlide";
import { SecondSlide } from "../../components/HomeSlider/SecondSlide/SecondSlide";
import { ThirdSlide } from "../../components/HomeSlider/ThirdSlide/ThirdSlide";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import css from "./HomePage.module.css";
import { Footer } from "../../components/Footer/Footer";

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 3;

  const goToNextSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
    );
  };

  const goToPreviousSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <div className={css.mainContainer}>
        <div className={css.sliderContainer}>
          <div
            className={css.slidesWrapper}
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            <div className={css.slide}>
              <FirstSlide />
            </div>
            <div className={css.slide}>
              <SecondSlide />
            </div>
            <div className={css.slide}>
              <ThirdSlide />
            </div>
          </div>
          <div className={css.arrowsContainer}>
            <div>
              <button className={css.leftArrow} onClick={goToPreviousSlide}>
                <LuArrowLeft size={20} />
              </button>
            </div>
            <div>
              <button className={css.rightArrow} onClick={goToNextSlide}>
                <LuArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
