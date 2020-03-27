require('dotenv').config({
  path:`.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Masturbation Records`,
    description: `Wir sind ein offener Verein für alle Altersgruppen, die Interesse an Alternativmusik haben. Sei es in Form von selbst veranstalteten Konzerten/
		Abendveranstaltungen für die Hollabrunner Gegend oder auch in
		eigenkreativer Regie`,
    author: `Masturbation`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options:{
        spaceId: `7742dwc9t1v9`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Masturbation Records`,
        short_name: `mr`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, 
      },
    },
  ],
}
