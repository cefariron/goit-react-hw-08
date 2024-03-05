import css from "./ThirdSlide.module.css";

export const ThirdSlide = () => {
  return (
    <div className={css.allContainer}>
      <div className={css.mainContainer}>
        <div className={css.contentContainer}>
          <div className={css.content}>
            <div className={css.bgImgContainer}>
              <img
                className={css.bgImgTel}
                src="https://i.ibb.co/W33dTHx/Frame-47476.png"
                alt="Описание изображения"
              />
              <img
                className={css.bgImg}
                src="https://i.ibb.co/5R4rC4s/Frame-47475.png"
                alt="Описание изображения"
              />
            </div>
            <div className={css.subscription}>
              <h3 className={css.topSubscription}>
                All actions - in one place! Register account and enjoy! 👍
              </h3>
              <p className={css.bottomSubscription}>
                Create, store, edit, delete and synchronize contacts with any of
                your devices! Dynamic search for contacts by name and number!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={css.wrap}></div>
    </div>
  );
};
