import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav className={styles.nav}>
    <ul className={styles.list}>
      <li className={styles.item}>
        <NavLink
          exact
          to="/"
          // className={styles.link}
          activeClassName={styles.link}
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/movies"
          // className={styles.link}
          activeClassName={styles.link}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
