import React from 'react'
import Img from 'gatsby-image'
import ReactMarkdown from 'react-markdown'
import { FaGithubSquare, FaExternalLinkAlt } from "react-icons/fa"
import { Layout } from '../Components/Layout';
import { Heading } from '../Components/UI/Heading/Heading'
import * as styles from './portfolioTemplate.module.scss'

const portfolioTemplate = ({pageContext}) => {
    console.log(pageContext)
    return (
      <Layout>
        <article className={styles.Portfolio__Blog}>
          <div className={styles.Portfolio__Thumbnail}>
            <Img fluid={pageContext.thumbnail} alt={pageContext.title} />
          </div>
          <div className={styles.Portfolio__DecoRect} />
          <div className={styles.Portfolio__Text}>
            <Heading>{pageContext.title}</Heading>
            <div className={styles.Stack}>
              {pageContext.stack.map(item => (
                <div key={item.id} className={styles.techName}>
                  {item.techName}
                </div>
              ))}
            </div>
            <div className={styles.Links}>
              {pageContext.github && (
                <a href={pageContext.github}>
                  <FaGithubSquare />
                </a>
              )}
              {pageContext.demo && (
                <a href={pageContext.demo}>
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>
            <div>
              <ReactMarkdown source={pageContext.text} />
            </div>
          </div>
        </article>
      </Layout>
    )
}

export default portfolioTemplate
