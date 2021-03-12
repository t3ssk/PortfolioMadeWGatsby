import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'
import * as styles from './FeaturedPost.module.scss'


export const FeaturedPost = (props) => {
    return (
      <article className={styles.Featured}>
        <div className={styles.Thumbnail}>
          <Link to={`/post/${props.slug}`}>
            <Img fluid={props.image} alt={props.title} />
          </Link>
        </div>
        <div className={styles.Text__card}>
         <Link to={`/post/${props.slug}`}><h1>{props.title}</h1></Link> 
          <p>{props.excerpt}</p>
          <div className={styles.Text__meta}>
            <div className={styles.Tags}>
              {props.tags && props.tags.map(item => {
                return (<span key={item.id}>
                  <Link to={`/tag/${item.slug}`}>{item.Category}</Link>
                </span>)
              })}
            </div>
            <p>{props.time}</p>
          </div>
        </div>
      </article>
    )
}
