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

  menuCategory: (_, { category }) => menu[category],

  menuItem: (_, { category, slug }) =>
    menu[category].filter(item => item.slug === slug),
};
