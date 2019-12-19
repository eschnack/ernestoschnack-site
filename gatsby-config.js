module.exports = {
  siteMetadata: {
    title: `Ernesto Schnack`,
    description: `Composer, Guitarist`,
    author: `@eschnack`,
    facebookURL: `https://www.facebook.com/ernestoschnack/`,
    twitterURL: `https://www.twitter.com/eschnack/`,
    instagramURL: `https://www.instagram.com/eschnack/`,
    youtubeURL: `https://www.youtube.com/channel/UCz1PeIEiNkKRwWDKFA6RkzQ`,
    patreonURL: `https://www.patreon.com/ernestoschnack`,
    spotifyURL: `https://open.spotify.com/artist/747tlXumGKkuRY8xRbrYjC?si=gpxnwEg2SIuTLarFuYAhww`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ernesto Schnack`,
        short_name: `Ernesto Schnack`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#2c84de`,
        display: `standalone`,
        icon: `src/images/es_logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-youtube-v2`,
      options: {
        channelId: ["UCz1PeIEiNkKRwWDKFA6RkzQ"],
        apiKey: "AIzaSyC-hY_CXgHdu8Nz-ffG2sg8lzWHWqGCBVE",
        maxVideos: 52, // Defaults to 50
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          {
            resolve: "gatsby-remark-normalize-paths",
            options: {
              pathFields: ["cover"],
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lexend Deca`,
          },
        ],
      },
    },
  ],
}
