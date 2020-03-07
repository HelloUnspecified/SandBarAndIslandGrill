const menu = require('./menu_items');

module.exports = {
  menu: (parent, { isFeatured }, { dataSources }) => {
    const flatMenu = Object.keys(menu)
      .map(m => menu[m])
      .reduce((acc, cur) => acc.concat(cur), []);

    if (isFeatured) {
      return flatMenu.filter(item => item.isFeatured);
    }

    return flatMenu;
  },

  menuItem: (parent, { category, slug }, { dataSources }) =>
    menu[category].filter(item => item.slug === slug),

  drinks: (parent, args, { dataSources }) => menu.drinks,
  appetizers: (parent, args, { dataSources }) => menu.appetizers,
  dinners: (parent, args, { dataSources }) => menu.dinners,
  salads: (parent, args, { dataSources }) => menu.salads,
  kids: (parent, args, { dataSources }) => menu.kids,
  wraps: (parent, args, { dataSources }) => menu.wraps,
};
