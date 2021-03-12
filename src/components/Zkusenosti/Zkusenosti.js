import React from 'react'
import {Link} from 'gatsby'
import * as styles from './Zkusenosti.module.scss'
import { Heading } from '../UI/Heading/Heading';

export const Zkusenosti = () => {
    return (
      <div className={styles.Zkusenosti} id="zkusenosti">
        <Heading>01 Zkušenosti</Heading>
        <p>
          Zatím jsem v oboru nepracovala, proto za mě může mluvit jen mé{" "}
          <span>
            <Link to="/portfolio">portfolio.</Link>
          </span>
        </p>
      </div>
    )
}
