/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://handi-eco.vn",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "daily",
  exclude: ["/admin"],
};

module.exports = config;