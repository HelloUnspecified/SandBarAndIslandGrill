module.exports = {
  target: 'serverless',
  env: {
    gmapsKey: process.env.gmaps_key,
  },
  serverRuntimeConfig: {
    gmapsKey: process.env.gmaps_key,
  },
};
