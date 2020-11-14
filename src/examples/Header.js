import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
const getData = graphql`
{
    site {
    siteMetadata {
      author
      data
      description
      person {
        age
        name
      }
      title
    }
  }
}
`

const Header = () => {
  const { site: { siteMetadata: { title, person: { name } } } } = useStaticQuery(getData);

  return (
    <div>
      {/* <h1>Title: {data.site.siteMetadata.title}</h1>
      <h2>Name: {data.site.siteMetadata.person.name}</h2> */}
      <h2>Title: {title}</h2>
      <h2>Name: {name}</h2>
    </div>
  )
}

export default Header;
