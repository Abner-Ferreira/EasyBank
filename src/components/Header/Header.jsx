import React, { useContext, useState } from 'react'
import close from '../../assets/icon-close.svg'
import hamburger from '../../assets/icon-hamburger.svg'
import logo from '../../assets/logo.svg'
import Button from '../Button/Button'
import styles from './header.module.css'
import {ScrollContext} from '../../contexts/Scroll'

export default function Header() {

  const {scrollToSection, home, about, blog, contact} = useContext(ScrollContext)

  const [menuClicked, setMenuClicked] = useState(false)


  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <img src={menuClicked ? close : hamburger} alt="hamburger" className={styles.imgMenu} onClick={() => setMenuClicked(!menuClicked)} />
      <nav className={[menuClicked ? styles.menu : styles.defaultMenu]} id={styles.navigation}>
        <ul className={styles.options} >
          <li onClick={() => {
            scrollToSection(home)
            setMenuClicked(false)
            }}>
              Home
          </li>
          <li onClick={() => {
            scrollToSection(about)
            setMenuClicked(false)
            }}>
              About
          </li>
          <li className={styles.selected} onClick={() => {
            scrollToSection(contact)
            setMenuClicked(false)
            }}>
              Contact
          </li>
          <li onClick={() => {
            scrollToSection(blog)
            setMenuClicked(false)
            }}>
              Blog
          </li>
          <li onClick={() => {
            scrollToSection(contact)
            setMenuClicked(false)
            }}>
              Carrers
          </li>
        </ul>
      </nav>
      <div className={styles.divBtn}>
        <Button />

      </div>
    </header>
  )
}
