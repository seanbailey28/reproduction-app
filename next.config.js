/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  basePath: '/test',
  i18n: {
    locales: ['en-GB', 'en-US'],
    defaultLocale: 'en-GB',
    localeDetection: false,
  },
}
