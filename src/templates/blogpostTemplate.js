import React from 'react'
import Img from 'gatsby-image'
import {Link} from 'gatsby'
import ReactMarkdown from 'react-markdown'
import {Layout} from '../Components/Layout'
import * as styles from './blogpostTemplate.module.scss'


const blogpostTemplate = ({pageContext}) => {
    return (
      <Layout>
        <article className={styles.BlogPost}>
          <div className={styles.Blogpost__thumbnail}>
            <Img fluid={pageContext.image} alt={pageContext.title} />
          </div>
          <div className={styles.Blogpost__square}></div>
          <div className={styles.Blogpost__text}>
            <h1>{pageContext.title}</h1>
            <p className={styles.Published}>{pageContext.published}</p>
            <div className={styles.Tags}>
              {pageContext.kategorie &&
                pageContext.kategorie.map(item => {
                  return (
                    <span key={item.id}>
                      <Link to={`/tag/${item.slug}`}>{item.Category}</Link>
                    </span>
                  )
                })}
            </div>
            <div className={styles.Text}>
            <ReactMarkdown source={pageContext.content} />
            </div>
          </div>
        </article>
      </Layout>
    )
}

export default blogpostTemplate
