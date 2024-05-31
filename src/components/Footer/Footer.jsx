import React, { useContext } from 'react'
import styles from './footer.module.css'
import logo from '../../assets/logo-branco.svg'
import facebook from '../../assets/icon-facebook.svg'
import instagram from '../../assets/icon-instagram.svg'
import pinterest from '../../assets/icon-pinterest.svg'
import twitter from '../../assets/icon-twitter.svg'
import youtube from '../../assets/icon-youtube.svg'
import Button from '../Button/Button'
import { ScrollContext } from '../../contexts/Scroll'

function Footer() {

  const { contact} = useContext(ScrollContext)

  return (
    <footer className={styles.container} ref={contact}>
      <div className={styles.logos}>
        <img src={logo} alt="logo EasyBank" />
        <div className={styles.social}>
          <img src={facebook} alt="logo facebook" />
          <img src={youtube} alt="logo youtube" />
          <img src={twitter} alt="logo twitter" />
          <img src={pinterest} alt="logo pinterest" />
          <img src={instagram} alt="logo instagram" />
        </div>
      </div>
      <div className={styles.links}>
        <p>About Us</p>
        <p>Carrers</p>
        <p>Contact</p>
        <p>Support</p>
        <p>Blog</p>
        <p>Privacy Policy</p>
      </div>
      <div className={styles.copy}>
        <Button/>
        <p>&copy; EasyBank. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer;