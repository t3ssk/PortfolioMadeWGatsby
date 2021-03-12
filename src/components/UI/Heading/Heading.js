import React from 'react'
import * as styles from './Heading.module.scss'
export const Heading = ({children}) => {
    return (
        <h2 className={styles.Heading}>{children}</h2>
    )
}
