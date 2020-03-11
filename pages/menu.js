import React from 'react';
import { NextSeo } from 'next-seo';
import FullMenu from '../components/FullMenu';

const menu = () => {
  return (
    <>
      <NextSeo
        title="Menu - Sand Bar and Island Grill"
        description="All of are delicious food and drink specials here at Sand Bar and Island Grill."
      />
      <FullMenu />
    </>
  );
};

export default menu;
