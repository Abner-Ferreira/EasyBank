import React, { useContext } from 'react'
import styles from './home.module.css'
import Button from '../Button/Button'
import phones from '../../assets/image-mockups.png'
import { ScrollContext } from '../../contexts/Scroll'

export default function Home() {
  const {home} = useContext(ScrollContext)
  return (
    <>
      <section className={styles.container} id='home' ref={home}>
        <img src={phones} alt="celulares" id={styles.celulares} />
        <div className={styles.introduction}>
          <h1 className={styles.title}>Next generation digital banking</h1>
          <p className={styles.paragraph}>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
          <Button />
        </div>

      </section>
    </>
  )
}
