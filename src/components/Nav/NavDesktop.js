import React from 'react'
import { NavItems } from './NavItems';
import * as styles from "./NavDesktop.module.scss"


export const NavDesktop = () => {
    return (
      <nav className={styles.navDesktop}>
        <NavItems />
      </nav>
    )
}
