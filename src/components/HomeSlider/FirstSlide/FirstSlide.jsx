import css from "./FirstSlide.module.css";

export const FirstSlide = () => {
  return (
    <div className={css.allContainer}>
      <div className={css.mainContainer}>
        <div className={css.contentContainer}>
          <div className={css.content}>
            <div className={css.bgImgContainer}>
              <img
                className={css.bgImgTel}
                src="https://i.ibb.co/fSSKVmC/Frame-47472.png"
                alt="Описание изображения"
              />
              <img
                className={css.bgImg}
                src="https://i.ibb.co/L6LNM0v/Frame-47470.png"
                alt="Описание изображения"
              />
            </div>
            <div className={css.subscription}>
              <h3 className={css.topSubscription}>
                Cloud Contacts - the best app for manage your contacts! 🚀
              </h3>
              <p className={css.bottomSubscription}>
                All modern approaches and tools to make your experience of
                working with your contacts as convenient and easy as possible!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={css.wrap}></div>
    </div>
  );
};
