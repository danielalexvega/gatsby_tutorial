import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import img from '../images/hotel.jpg';
import Image from 'gatsby-image';

const getImages = graphql`
{
  fixed:file(relativePath:{eq:"hands.jpg"}){
    childImageSharp{
      fixed (width:300, grayscale: true) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  fluid:file(relativePath:{eq:"neon.jpg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const Images = () => {
  const data = useStaticQuery(getImages);

  return (
    <section className="images">
      <article className="single-image">
        <h3>Basic Image</h3>
        <img src={img} alt="Hands image" width="100%" />
      </article>
      <article className="single-image">
        <h3>Fixed image/blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article className="single-image">
        <h3>Fluid Image/svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
      </article>
    </section>
  )
}

export default Images;
