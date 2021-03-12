import React from 'react'
import { HelmetData } from './HelmetData';
import { useMediaQuery } from "react-responsive"
import {NavDesktop} from './Nav/NavDesktop'
import {NavMobile} from './Nav/NavMobile'
import './Layout.module.scss'
import { Footer } from './Footer/Footer';


export const Layout = ({children}) => {

    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 704px)" })
    if (typeof window !== "undefined") {
      // eslint-disable-next-line global-require
      require("smooth-scroll")('a[href*="#"]')
    }
    return (
      <>
          <main>
            {isTabletOrMobile ? <NavMobile /> : <NavDesktop />}
            <HelmetData />
            {children}
          </main>

        <Footer />
      </>
    )
}
