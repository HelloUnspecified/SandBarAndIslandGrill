const queries = require('./queries');

// create the Apollo Server
module.exports = {
  Query: {
    ...queries
  }
};
