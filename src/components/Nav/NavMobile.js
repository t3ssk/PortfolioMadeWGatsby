import React, {useState} from 'react'
import {FaTimes} from 'react-icons/fa'
import { useSpring, animated } from "react-spring"
import * as styles from './NavMobile.module.scss'
import { NavItems } from "./NavItems"
import { Logo } from './Logo';

export const NavMobile = () => {
    const [menuOpen, setMenuOpen] = useState(false)
     const props = useSpring({ transform: !menuOpen ? "translateX(-550px)" : "translateX(1)"})
    let text  
      if(menuOpen){
        text = <FaTimes />
      } else {text = (
                <p>
                  ME
                  <br /> NU
                </p>
              )}
    return (
      <>
        <div className={styles.MobileNav}>
          <div className={styles.Menu}>
            <button onClick={() => setMenuOpen(!menuOpen)}>
             {text}
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
