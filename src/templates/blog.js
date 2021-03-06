import React from 'react'
import {Layout} from '../Components/Layout'
import { FeaturedPost } from '../Components/FeaturedPost/FeaturedPost';
import { NormalArticle } from '../Components/NormalArticle/NormalArticle';
import { Pagination } from '../Components/Pagination/Pagination';

const blog = ({pageContext}) => {

    return (
      <Layout>
        {pageContext.posts && pageContext.posts.map(post => {
          return post.Featured ? (
            <FeaturedPost
              key={post.BlogTitle}
              slug={post.slug}
              image={post.Thumbnail.childImageSharp.fluid}
              title={post.BlogTitle}
              excerpt={post.Excerpt}
              tags={post.Kategorie}
              time={post.Published}
            />
          ) : (
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
        {pageContext.posts && <Pagination
          currentPage={pageContext.currentPage}
          numOfPages={pageContext.numOfPages}
        />}
        {!pageContext.posts && <h1>Tady zatím nic není</h1>}
      </Layout>
    )
}


export default blog


