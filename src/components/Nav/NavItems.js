import React from 'react'
import { useMediaQuery } from "react-responsive"
import {Link} from 'gatsby'
import {Logo} from './Logo'
import * as styles from './NavItems.module.scss'

export const NavItems = ({mobileActive}) => {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 704px)" })
    return (
      <ul className={`${styles.Nav} ${mobileActive && styles.Mobile}`}>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/portfolio">PORTFOLIO</Link>
        </li>
        {!isTabletOrMobile && (
          <li>
            <Logo />
          </li>
        )}
        <li>
          <Link to="/kontakt">KONTAKT</Link>
        </li>
        <li>
          <Link to="/blog">BLOG</Link>
        </li>
      </ul>
    )
}
