/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* this ***only*** runs at build */

const fs = require('fs');
const glob = require('glob');
const fetch = require('isomorphic-unfetch');

// TODO: should pull this from the constants
const CATEGORY_ROUTES = {
  APPETIZER: 'appetizers',
  DINNER_LANDFOOD: 'dinners',
  DINNER_SEAFOOD: 'dinners',
  DRINK: 'drinks',
  KIDS: 'kids',
  SALAD: 'salads',
  WRAP: 'wraps',
};

const OMIT_FILES = [
  'pages/api/graphql.js',
  'pages/api/resolvers/index.js',
  'pages/api/resolvers/queries/index.js',
  'pages/api/resolvers/queries/menu/data/appetizers.js',
  'pages/api/resolvers/queries/menu/data/dinnersLandfood.js',
  'pages/api/resolvers/queries/menu/data/dinnersSeafood.js',
  'pages/api/resolvers/queries/menu/data/drinks.js',
  'pages/api/resolvers/queries/menu/data/kids.js',
  'pages/api/resolvers/queries/menu/data/salads.js',
  'pages/api/resolvers/queries/menu/data/wraps.js',
  'pages/api/resolvers/queries/menu/menu_items.js',
  'pages/api/resolvers/queries/menu/menu.js',

  'pages/api/typedefs/index.js',
  'pages/_app.js',
  'pages/_document.js',
  'pages/menu/[category].js',
  'pages/menu/[category]/[menuItem].js',
];

const walkSync = details => {
  const fileObj = [];
  const filesFound = glob.sync(`${details.dir}/**/*.${details.ext}`);

  filesFound.forEach(file => {
    console.log('file:', file);
    if (OMIT_FILES.includes(file)) return;
    const fileStat = fs.statSync(file);

    const cleanFileName = file
      .substr(0, file.lastIndexOf('.'))
      .replace('pages/', '');

    fileObj.push({
      page: `/${cleanFileName}`,
      lastModified: fileStat.mtime,
    });
  });

  return fileObj;
};

const getMenuItems = async () => {
  const response = await fetch('http://sandbarandislandgrill.com/api/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: '{ menu(isFeatured: false) { name category slug } }',
    }),
  })
    .then(r => r.json())
    .then(data => {
      return data.data.menu.map(item => {
        return {
          page: `/menu/${CATEGORY_ROUTES[item.category]}/${item.slug}`,
          lastModified: new Date(),
        };
      });
    });

  return response;
};

(async function createSitemap() {
  console.log('creating sitemap json');

  try {
    const allPages = [...walkSync({ dir: 'pages', ext: 'js' })];
    const allMenuItemPages = await getMenuItems();
    allPages.push(...allMenuItemPages);

    fs.writeFileSync('./utilities/pages.json', JSON.stringify(allPages), {
      encoding: 'utf8',
      flag: 'w',
    });
  } catch (e) {
    console.log('file write error %O', e);
  }
})();
