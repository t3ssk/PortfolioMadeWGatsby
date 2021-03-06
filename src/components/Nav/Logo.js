import React from 'react'
import logo from '../../assets/logo.svg';
import * as styles from './Logo.module.scss';

export const Logo = () => {
    return (<img src={logo} alt="site logo" className={styles.Logo}/>
    )
}
