import React from 'react'
import { Layout } from '../Components/Layout';
import { graphql } from "gatsby";
import { NormalArticle } from '../Components/NormalArticle/NormalArticle';
import {Pagination} from '../Components/Pagination/Pagination'
import * as styles from './tagTemplate.module.scss';


const tagTemplate = ({pageContext, data}) => {
  const {currentPage, index, postsPerTagPage} = pageContext
  const postsSlice = data.allStrapiBlog.nodes.slice(
    index * postsPerTagPage,
    (index*postsPerTagPage)+postsPerTagPage)

    return (
      <Layout>
        <h1 className={styles.Name}>Tag: {pageContext.name}</h1>
        <div>
          {postsSlice.map(post => {
            return (
              <NormalArticle
                key={post.BlogTitle}
                slug={post.slug}
                image={post.Thumbnail.childImageSharp.fluid}
                title={post.BlogTitle}
                excerpt={post.Excerpt}
                tags={post.Kategorie}
                time={post.Published}
              />
            )
          })}
        </div>
        <Pagination
          currentPage={currentPage}
          numOfPages={pageContext.numOfTagPages}
        />
      </Layout>
    )
}

export const query = graphql`
         query singleTagQuery($slug: String) {
           allStrapiBlog(
             filter: { Kategorie: { elemMatch: { slug: { eq: $slug } } } }
           ) {
             nodes {
               Kategorie {
                 Category
                 slug
                 id
               }
               BlogTitle
               Excerpt
               Featured
               Published(
                 formatString: "dddd DD/MMMM/YYYY, HH:mm"
                 locale: "cs-CZ"
               )
               Thumbnail {
                 childImageSharp {
                   fluid {
                     aspectRatio
                     base64
                     sizes
                     src
                     srcSet
                     srcSetWebp
                     tracedSVG
                     srcWebp
                   }
                 }
               }
               slug
             }
           }
         }
       `

export default tagTemplate
