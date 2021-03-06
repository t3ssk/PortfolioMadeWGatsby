import React from 'react'
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    allSite {
      nodes {
        siteMetadata {
          author
          description
          siteUrl
          title
        }
      }
    }
  }
`


export const HelmetData = () => {
    const data = useStaticQuery(getData)
    const metadata = data.allSite.nodes[0]
    const {siteMetadata:{ author, description, siteUrl, title}} = metadata
    return (<Helmet>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="../assets/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="../assets/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="../assets/favicon-16x16.png"
          />
         
            <title>{title}</title>
            <meta name="title" content={title}/>
            <meta name="description" content={description}/>
            <meta name="author" content={author}/>

            <meta property="og:type" content="website"/>
            <meta property="og:url" content={siteUrl}/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={siteUrl}/>
            <meta property="twitter:title" content={title}/>
            <meta property="twitter:description" content={description}/>
            </Helmet>
    )
}
