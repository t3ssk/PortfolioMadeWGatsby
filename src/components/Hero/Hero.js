import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from "gatsby"
import * as styles from './Hero.module.scss'
const getData = graphql`
  {
    file(relativePath: { eq: "IMG_0312 (kopie).jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export const Hero = () => {
    const data=useStaticQuery(getData)
    console.log(data)
    return (
      <div className={styles.Hero}>
        <div className={styles.Square} />
        <div className={styles.Image}>
            <Img fluid={data.file.childImageSharp.fluid}/>
        </div>
        <div className={styles.Text}>
          <h1>Jsem Tereza Konečná</h1>
          <p>
            a v prvním lockdownu jsem si řekla, že by mě mohlo bavit programování.
            Pak jsem poznala React a už nebylo cesty ven. Je to pro mě perfektní
            propojení kreativity, logiky a systematičnosti. Ráda se učím novým
            věcem, ve kterých vidím smysl.
          </p>
        </div>
      </div>
    )
}
