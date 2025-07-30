
const siteConfig = require("./siteConfig");

module.exports = {
  siteMetadata: {
    title: "Stifin Tangerang",
    author: "Tim stifin Tangerang",
    description: "Situs resmi STIFIn Tangerang untuk informasi, edukasi, dan layanan STIFIn.",
    keywords: "stifin, tes stifin tangerang, tes kepribadian stifin, stifin tangerang, tes stifin, mesin kecerdasan stifin,mengenal diri dengan tes stifin, metode stifin,",
    image: "/img/manfaat.jpg",
    siteUrl: "https://stifintangerang.netlify.app/",
    social: {
      twitter: siteConfig.twitter,
      facebook: siteConfig.facebook,
      github: siteConfig.github,
    },
  },
  plugins: [
    // === Image uploads support ===
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    // === Pages content ===
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src`,
        name: "pages",
      },
    },

    // === Image transformers ===
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,

    // === Markdown support with images ===
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`, `webp`],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1360,
              withWebp: true,
              showCaptions: false,
              quality: 75,
              wrapperStyle: `margin: 7vw 0;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-smartypants`,
        ],
      },
    },

    // === CMS ===
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },

    // === PostCSS ===
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("postcss-easy-import")(),
          require("postcss-custom-properties")({ preserve: false }),
          require("postcss-color-function")(),
          require("autoprefixer")({ overrideBrowserslist: ["last 1 version"] }),
        ],
      },
    },

    // === Purge unused CSS ===
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
      },
    },

    // === Web App Manifest ===
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteConfig.name,
        short_name: siteConfig.shortName,
        start_url: siteConfig.prefix,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: siteConfig.manifest_icon,
      },
    },

    // === Netlify optimizations ===
    `gatsby-plugin-netlify`,
    `gatsby-plugin-offline`,

    // === SEO ===
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
};