import css from "./SecondSlide.module.css";

export const SecondSlide = () => {
  return (
    <div className={css.allContainer}>
      <div className={css.mainContainer}>
        <div className={css.contentContainer}>
          <div className={css.content}>
            <div className={css.bgImgContainer}>
              <img
                className={css.bgImgTel}
                src="https://i.ibb.co/3rSssp5/ee.png"
                alt="Описание изображения"
              />
              <img
                className={css.bgImg}
                src="https://i.ibb.co/1GFvZLC/Frame-47479.png"
                alt="Описание изображения"
              />
            </div>
            <div className={css.subscription}>
              <h3 className={css.topSubscription}>
                Start your Cloud Contacts experience in just a few clicks! ⚡️
              </h3>
              <p className={css.bottomSubscription}>
                A simple and clear registration and login procedure will be
                understandable to any user, regardless of age.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={css.wrap}></div>
    </div>
  );
};
