module.exports = {
  target: 'serverless',
  env: {
    gmapsKey: process.env.GMAPS_KEY,
    me: 'YOLO',
  },
  serverRuntimeConfig: {
    gmapsKey: process.env.GMAPS_KEY,
  },
};
