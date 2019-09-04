const menu = require('./menu_items');

module.exports = {
  menu: (parent, args, { dataSources }) =>
    Object.keys(menu)
      .map(m => menu[m])
      .reduce((acc, cur) => acc.concat(cur), []),
  drinks: (parent, args, { dataSources }) => menu.drinks,
  appetizers: (parent, args, { dataSources }) => menu.appetizers,
  dinners: (parent, args, { dataSources }) => menu.dinners,
  salads: (parent, args, { dataSources }) => menu.salads,
  kids: (parent, args, { dataSources }) => menu.kids,
  wraps: (parent, args, { dataSources }) => menu.wraps
};
