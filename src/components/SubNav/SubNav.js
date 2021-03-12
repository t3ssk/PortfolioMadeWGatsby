import React from 'react'
import {Link} from 'gatsby'
import * as styles from './SubNav.module.scss'

export const SubNav = () => {
    return (
      <div className={styles.SubNav}>
        <hr />
        <div
          className={styles.Square}
        />
        <ol className={styles.List}>
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
