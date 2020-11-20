import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import img from '../images/hands.jpg';
import Image from 'gatsby-image';

const getImages = graphql`
{
  fixed:file(relativePath:{eq:"hands.jpg"}){
    childImageSharp{
      fixed (width:300){
        src
      }
    }
  }
  fluid:file(relativePath:{eq:"neon.jpg"}){
    childImageSharp{
      fluid{
        src
      }
    }
  }
}
`

const Images = () => {
  return (
    <section className="images">
      <article className="single-image">
        <h3>Basic Image</h3>
      </article>
      <article className="single-image">
        <h3>Fixed image/blur</h3>
      </article>
      <article className="single-image">
        <h3>Fluid Image/svg</h3>
      </article>
    </section>
  )
}

export default Images;
