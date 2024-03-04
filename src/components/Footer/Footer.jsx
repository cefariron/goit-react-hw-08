import css from "./Footer.module.css";

export const Footer = () => {
  return (
    <>
      <footer className={css.footer}>
        <div className={css.container}>
          <div className={css.subscription}>
            <div className={css.logoContainer}>
              <img
                className={css.logo}
                src="https://play-lh.googleusercontent.com/reWUjxXDgPjx-1rU3zMZBNMnzIpXXKKwd7Tl08RYrNH91Gmmd7BMob2uCVmzbAjh1Bw"
                alt="logo"
              />
              <p>
                <strong>Cloud Contacts</strong>
              </p>
            </div>
            <h4 className={css.subTitle}>About us</h4>
            <p className={css.subText}>
              The Cloud Contacts web app was developed by our team to easily
              store, edit and search your contacts. Wherever you are, anywhere
              in the world where there is internet, using any device, you will
              always be able to access your contacts book! Enjoy Cloud Contacts
              with us!
            </p>
          </div>
          <div className={css.contactsWrapper}>
            <div className={css.contactsContainer}>
              <h3 className={css.contactsTitle}>Контакты</h3>
              <ul className={css.contactsList}>
                <li className={css.contactsItem}>Адрес: Город, Улица, Дом</li>
                <li className={css.contactsItem}>Телефон: +7 (123) 456-7890</li>
                <li className={css.contactsItem}>Email: info@example.com</li>
              </ul>
            </div>
            <div className={css.newsContainer}>
              <h3 className={css.newsTitle}>Подписаться на рассылку</h3>
              <form className={css.newsForm}>
                <input
                  className={css.newsInput}
                  type="email"
                  placeholder="Введите ваш email"
                  required
                />
                <button className={css.newsBtn} type="submit">
                  Подписаться
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
