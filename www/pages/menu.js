import React from 'react';
import Head from 'next/head';
import FullMenu from '../components/FullMenu';

const menu = () => {
  return (
    <>
      <Head>
        <title key="title">Menu - Sand Bar and Island Grill</title>
      </Head>
      <FullMenu />
    </>
  );
};

export default menu;
