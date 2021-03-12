import React from 'react'
import { Link } from "gatsby"
import Img from "gatsby-image"
import * as styles from './NormalArticle.module.scss'


export const NormalArticle = (props) => {
    return (
      <article className={styles.Normal_article}>
        <div className={styles.Thumbnail}>
          <Link to={`/post/${props.slug}`}>
            <Img fluid={props.image} alt={props.title} />
          </Link>
        </div>
        <div className={styles.Text__card}>
          <Link to={`/post/${props.slug}`}>
            <h2>{props.title}</h2>
          </Link>
          <p>{props.excerpt}</p>
          <div className={styles.Text__meta}>
            <div className={styles.Tags}>
              {props.tags &&
                props.tags.map(item => {
                  return (
                    <span key={item.id}>
                      <Link to={`/tag/${item.slug}`}>{item.Category}</Link>
                    </span>
                  )
                })}
            </div>
            <p>{props.time}</p>
          </div>
        </div>
      </article>
    )
}
