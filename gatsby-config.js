require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

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
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: process.env.FB_PX,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
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
        theme_color: `#14466a`,
        display: `standalone`,
        icon: `src/images/esheavyicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-youtube-v3`,
      options: {
        channelId: ["UCz1PeIEiNkKRwWDKFA6RkzQ"],
        apiKey: process.env.YT_API_KEY,
        maxVideos: 100, // Defaults to 50
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
            resolve: `gatsby-remark-relative-images`,
          },
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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-9191843-1", // Google Analytics / GA
          "G-79QN07R377",
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Lexend Deca",
              variants: ["400"],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: true, // optional parameter to include script in development
        id: 2451586,
        sv: 6,
      },
    },
  ],
}
