import React, {useState} from 'react'
import { useSpring, animated } from "react-spring"
import * as styles from './NavMobile.module.scss'
import { NavItems } from "./NavItems"
import { Logo } from './Logo';

export const NavMobile = () => {
    const [menuOpen, setMenuOpen] = useState(false)
     const props = useSpring({ transform: !menuOpen ? "translateX(-550px)" : "translateX(1)"})


    return (
      <>
        <div className={styles.MobileNav}>
          <div className={styles.Menu}>
            <button onClick={()=>setMenuOpen(!menuOpen)}>
              ME<p>NU</p>
            </button>
          </div>
          <Logo />
        </div>
        {menuOpen && (
          <animated.div style={props}>
            <NavItems mobileActive />
          </animated.div>
        )}
      </>
    )
}
