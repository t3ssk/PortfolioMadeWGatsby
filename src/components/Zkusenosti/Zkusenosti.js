import React from 'react'
import {Link} from 'gatsby'
import * as styles from './Zkusenosti.module.scss'

export const Zkusenosti = () => {
    return (
      <div className={styles.Zkusenosti} id="zkusenosti">
        <h2>01 Zkušenosti</h2>
        <p>
          Zatím jsem v oboru nepracovala, proto za mě může mluvit jen mé <span><Link to='/portfolio'>
            portfolio.
          </Link></span>
          
        </p>
      </div>
    )
}
