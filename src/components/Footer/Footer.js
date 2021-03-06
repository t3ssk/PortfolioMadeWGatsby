import React from 'react'
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa"
import * as styles from './Footer.module.scss'

export const Footer = () => {
    return (
      <div className={styles.Footer}>
        <p>© Tereza Konečná. Vytvořeno s Gatsby a Strapi.</p>
        <div className={styles.Socials}>
          <a href="https://www.facebook.com/tess.konecna/">
            <FaFacebookSquare />
          </a>
          <a href="http://instagram.com/t3ssk">
            <FaInstagramSquare />
          </a>
          <a href="https://github.com/t3ssk">
            <FaGithubSquare />
          </a>
        </div>
      </div>
    )
}
