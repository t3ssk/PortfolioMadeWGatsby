const path = require('path')


module.exports.createPages = async({graphql, actions}) => {
    const { createPage } = actions

    //Portfolio pages
    const result = await graphql(`
      query portfolio {
        allStrapiPortfolio {
          nodes {
            Excerpt
            ProjectDescription
            ProjectName
            ProjectThumbnail {
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
                  originalImg
                }
              }
            }
            githubLink
            liveDemoLink
            slug
            techStack {
              id
              techName
            }
          }
        }
      }
    `)
    result.data.allStrapiPortfolio.nodes.forEach(item => {
      createPage({
        path: `/portfolio/${item.slug}`,
        component: path.resolve(`src/templates/portfolioTemplate.js`),
        context: {
          slug: item.slug,
          title: item.ProjectName,
          text: item.ProjectDescription,
          stack: item.techStack,
          github: item.githubLink,
          demo: item.liveDemoLink,
          thumbnail: item.ProjectThumbnail.childImageSharp.fluid,
        },
      })
    })
    const blogPosts = await graphql(`
      {
        allStrapiBlog(sort: { fields: published_at, order: DESC }) {
          nodes {
            BlogContent
            BlogTitle
            Excerpt
            Featured
            Kategorie {
              Category
              id
              slug
            }
            Published(formatString: "dddd DD/MMMM/YYYY, HH:mm", locale: "cs-CZ")
            slug
            Thumbnail {
              childImageSharp {
                fluid {
                  src
                  aspectRatio
                  base64
                  sizes
                  srcSet
                  srcSetWebp
                  srcWebp
                  tracedSVG
                }
              }
            }
          }
        }
      }
    `)
    const posts = blogPosts.data.allStrapiBlog.nodes
    const postsPerPage = 8 
    const numOfPages=Math.ceil(posts.length/postsPerPage)
    Array.from({length: numOfPages}).forEach((page,index)=>{
      createPage({
        path: index === 0? `/blog` : `/blog/${index+1}`,
        component: path.resolve(`src/templates/blog.js`),
        context: {posts: posts.slice(index*postsPerPage, (index*postsPerPage)+postsPerPage),
        numOfPages,
        currentPage: index+1
        }
      })
    })

    //Tag page 
    const tagPage = await graphql(`
      query tagQuery {
        allStrapiBlog {
          nodes {
            Kategorie {
              Category
              slug
            }
          }
        }
      }
    `)

    const tagPosts = tagPage.data.allStrapiBlog.nodes
    const postsPerTagPage = 8
    const numOfTagPages = Math.ceil(tagPosts.length/postsPerTagPage)

    tagPage.data.allStrapiBlog.nodes.map(tag=>{
    Array.from({ length: numOfTagPages }).forEach((page, index) => {
      createPage({
        path:
          index === 0 ? `/tag/${tag.Kategorie[0].slug}` : `/tag/${tag.Kategorie[0].slug}/${index + 1}`,
        component: path.resolve(`src/templates/tagTemplate.js`),
        context: {
          slug: tag.Kategorie[0].slug,
          name: tag.Kategorie[0].Category,
          currentPage: index + 1,
          numOfTagPages,
          postsPerTagPage,
          index,
        },
      })
    })})
    // post page
    blogPosts.data.allStrapiBlog.nodes.forEach(post=>{
      createPage({
        path: `/post/${post.slug}`,
        component: path.resolve(`src/templates/blogpostTemplate.js`),
        context: {
          title: post.BlogTitle,
          content: post.BlogContent,
          kategorie: post.Kategorie,
          published: post.Published,
          image: post.Thumbnail.childImageSharp.fluid,
        },
      })
    })
}