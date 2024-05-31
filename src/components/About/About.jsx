import React, { useContext } from 'react'
import styles from './about.module.css'

import onlineBanking from '../../assets/icon-online.svg'
import simpleBudgeting from '../../assets/icon-budgeting.svg'
import fastOnboarding from '../../assets/icon-onboarding.svg'
import openAPI from '../../assets/icon-api.svg'
import { ScrollContext } from '../../contexts/Scroll'
export default function About() {

  const {about} = useContext(ScrollContext)
  
  return (
    <>
      <section className={styles.container} ref={about}>
        <h1 className={styles.mainTitle}>Why choose Easybank</h1>
        <p className={styles.mainParagraph}>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
        <div className={styles.aboutContainer}>
          <div className={styles.about}>
            <img src={onlineBanking} alt="Online Banking logo" />
            <h1 className={styles.title}>Online Banking</h1>
            <p className={styles.paragraph}>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
          </div>
          <div className={styles.about}>
            <img src={simpleBudgeting} alt="Simple Budgeting logo" />
            <h1 className={styles.title}>Simple Budgeting</h1>
            <p className={styles.paragraph}>See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.</p>
          </div>
          <div className={styles.about}>
            <img src={fastOnboarding} alt="Fast Onboarding logo" />
            <h1 className={styles.title}>Fast Onboarding</h1>
            <p className={styles.paragraph}>We don't do branches. Open your account in minutes online and start taking control of your finances right away.</p>
          </div>
          <div className={styles.about}>
            <img src={openAPI} alt="Open API logo" />
            <h1 className={styles.title}>Open API</h1>
            <p className={styles.paragraph}>Manage your savings, investments, pension, and much more from one account. Tracking your money has neves been easier.</p>
          </div>
        </div>
      </section>
    </>
  )
}
