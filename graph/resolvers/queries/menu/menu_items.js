const appertizers = require('./data/appetizers');

const appetizers = require('./data/appetizers');
const dinnersSeafood = require('./data/dinnersSeafood');
const dinnersLandfood = require('./data/dinnersLandfood');
const wraps = require('./data/wraps');
const drinks = require('./data/drinks');
const kids = require('./data/kids');
const salads = require('./data/salads');

module.exports = {
  appetizers,
  dinners: [...dinnersSeafood, ...dinnersLandfood],
  wraps,
  drinks,
  kids,
  salads
};
