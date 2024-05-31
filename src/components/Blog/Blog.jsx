import React, { useContext } from 'react'
import styles from './blog.module.css'

import money from '../../assets/image-currency.jpg'
import airplane from '../../assets/image-plane.jpg'
import confetti from '../../assets/image-confetti.jpg'
import restaurant from '../../assets/image-restaurant.jpg'
import { ScrollContext } from '../../contexts/Scroll'

export default function Blog() {

  const {blog} = useContext(ScrollContext)

  return (
    <>
      <section className={styles.container} ref={blog}>
        <h1 className={styles.mainTitle}>Last Articles</h1>
        <div className={styles.blogContainer}>
          <div className={styles.blog}>
            <img src={money} alt="Money blog" />
            <div className={styles.infos}>
              <span className={styles.author}>By Claire Robinson</span>
              <h2 className={styles.title}>Receive money in any currency with no fees</h2>
              <p className={styles.paragraph}>The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...</p>
            </div>
          </div>
          <div className={styles.blog}>
            <img src={restaurant} alt="Restaurant blog" />
            <div className={styles.infos}>
              <span className={styles.author}>By Wilson Hutton</span>
              <h2 className={styles.title}>Treat yourself without worrying about money</h2>
              <p className={styles.paragraph}>Our simple budgeting features allows you to separete out your spending and set realistic limits each month. That means you...</p>
            </div>
          </div>
          <div className={styles.blog}>
            <img src={airplane} alt="Airplane blog" />
            <div className={styles.infos}>
              <span className={styles.author}>By Wilson Hutton</span>
              <h2 className={styles.title}>Take your Easybank card wherever you go</h2>
              <p className={styles.paragraph}>We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you...</p>
            </div>
          </div>
          <div className={styles.blog}>
            <img src={confetti} alt="Confetti blog" />
            <div className={styles.infos}>
              <span className={styles.author}>By Claire Robinson</span>
              <h2 className={styles.title}>Our invite-only Beta accounts are now live!</h2>
              <p className={styles.paragraph}>After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
