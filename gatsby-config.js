/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title:'Gatsby Tutorial',
    description: 'a website created during a Gatsby tutorial',
    author:'Daniel Vega',
    data:['item 1', 'item 2'],
    person: { name: 'Daniel', age: 32}
  },
  plugins: [`gatsby-plugin-styled-components`]
}
