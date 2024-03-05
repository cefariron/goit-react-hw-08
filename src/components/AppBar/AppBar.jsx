import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { useAuth } from "../../hooks";
import css from "./AppBar.module.css";

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <div
        className={
          isLoggedIn ? css.navWrapperLoggedIn : css.navWrapperLoggedOut
        }
      >
        <Navigation />
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
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};
