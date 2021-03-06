import React from 'react'
import {Link} from 'gatsby'
import { useLocomotiveScroll } from "react-locomotive-scroll"
import * as styles from './SubNav.module.scss'

export const SubNav = () => {
    const { scroll } = useLocomotiveScroll()
  
    
    return (
      <div className={styles.SubNav}>
        <hr />
        <div
          className={styles.Square}
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="8"
          data-scroll-target="#list"
        />
        <ol className={styles.List} id="list">
          <li>
            <Link to="/#zkusenosti">Zkušenosti</Link>
          </li>
          <li>
            <Link to="/#schopnosti">Schopnosti</Link>
          </li>
          <li>
            <Link to="/#info">Další info o mně</Link>
          </li>
        </ol>
      </div>
    )
}
