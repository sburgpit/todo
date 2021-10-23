import React from 'react'
import styles from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.Navbar__wrapper}>
        <div className={styles.Navbar__logo}>ToDo.tsx</div>
        <ul className={styles.Navbar__list}>
          <li><NavLink to="/">Todo</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar