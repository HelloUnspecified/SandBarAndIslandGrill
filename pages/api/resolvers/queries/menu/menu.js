import debug from 'debug';

import menu from './menu_items';

const dlog = debug('sb:api:resolvers:menu');

export default {
  menu: (parent, { isFeatured }) => {
    dlog('menu');
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
