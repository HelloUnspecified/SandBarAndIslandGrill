module.exports = {
  target: 'serverless',
  env: {
    gmapsKey: process.env.gmaps_key,
    me: 'YOLO',
  },
  serverRuntimeConfig: {
    gmapsKey: process.env.GMAPS_KEY,
  },
};
