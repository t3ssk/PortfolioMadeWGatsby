import React, {useRef} from 'react'
import { HelmetData } from './HelmetData';
import { useMediaQuery } from "react-responsive"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import {NavDesktop} from './Nav/NavDesktop'
import {NavMobile} from './Nav/NavMobile'
import './Layout.module.scss'
import { Footer } from './Footer/Footer';


export const Layout = ({children}) => {
  const containerRef = useRef(null)
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 704px)" })
    if (typeof window !== "undefined") {
      // eslint-disable-next-line global-require
      require("smooth-scroll")('a[href*="#"]')
    }
    return (
    <>
    <LocomotiveScrollProvider options={{
      smooth: true}} containerRef={containerRef}>
      <main data-scroll-container ref={containerRef}>
        {isTabletOrMobile? <NavMobile/> : <NavDesktop/>}
        <HelmetData/>
        {children}    
        
        </main>
        </LocomotiveScrollProvider>
          
        <Footer/>
        </>
    )
}
