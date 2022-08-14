import { Link } from "react-router-dom";

import styles from "./MainNavigation.module.css";

function MainNavigationLayout() {
  return (
    <header className={styles.header}>
      <div>
        <span className={styles.navSpan}>Go</span>Meetups
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/" className={styles.Link}>
              All Meetups
            </Link>
          </li>
          <li>
            <Link to="/new-meetup" className={styles.Link}>
              New Meetups
            </Link>
          </li>
          <li>
            <Link to="/favorites" className={styles.Link}>
              Favorites
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigationLayout;
