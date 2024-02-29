import css from "./FirstSlide.module.css";

export const FirstSlide = () => {
  return (
    <div className={css.allContainer}>
      <div className={css.mainContainer}>
        <div className={css.contentContainer}>
          <div className={css.content}>
            <div className={css.bgImg}></div>
            <div className={css.subscription}>
              <div>
                <span className={css.topSubscription}>
                  Smoobu just got even better with our new Home! 🚀
                </span>
              </div>
              <div>
                <span className={css.bottomSubscription}>
                  Introducing Smoobu's all-new Home: Stay on top of your portal
                  connection status and maximize your productivity with a handy
                  to-do list, all in one convenient place.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
