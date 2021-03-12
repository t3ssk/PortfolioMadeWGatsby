import React from 'react'
import Img from 'gatsby-image'
import { FaGithubSquare, FaExternalLinkAlt } from "react-icons/fa"
import { useStaticQuery, graphql, Link } from "gatsby"
import * as styles from './Portfolio.module.scss'

const getData = graphql`
  {
    allStrapiPortfolio(sort: { fields: created_at, order: DESC }) {
      nodes {
        Excerpt
        ProjectDescription
        ProjectName
        ProjectThumbnail {
          childImageSharp {
            fluid {
              aspectRatio
              base64
              originalImg
              originalName
              presentationHeight
              presentationWidth
              sizes
              src
              srcSet
              srcSetWebp
              tracedSVG
              srcWebp
            }
          }
        }
        githubLink
        slug
        liveDemoLink
        techStack {
          techName
          id
        }
      }
    }
  }
`
export const PortfolioItem = () => {
    const data = useStaticQuery(getData)  

     const portfolioItem = data.allStrapiPortfolio.nodes.map(item => {
       return (
         <article className={styles.Portfolio__Item} key={item.slug}>
           <div className={styles.image}>
             <Link to={`/portfolio/${item.slug}`}>
               <Img
                 fluid={item.ProjectThumbnail.childImageSharp.fluid}
                 alt={item.ProjectName}
               />
             </Link>
           </div>
           <div className={styles.Portfolio__Text}>
             <Link to={`/portfolio/${item.slug}`}>
               <h3>{item.ProjectName}</h3>
             </Link>
             <p>{item.Excerpt}</p>
             <div className={styles.Stack}>
               {item.techStack.map(item => (
                 <div key={item.id} className={styles.techName}>
                   {item.techName}
                 </div>
               ))}
             </div>
             <div className={styles.Links}>
               {item.githubLink && (
                 <a href={item.githubLink}>
                   <FaGithubSquare />
                 </a>
               )}
               {item.liveDemoLink && (<a href={item.liveDemoLink}>
                 <FaExternalLinkAlt />
               </a>)}
             </div>
           </div>
         </article>
       )
     })

    return <>{portfolioItem}</>
}
