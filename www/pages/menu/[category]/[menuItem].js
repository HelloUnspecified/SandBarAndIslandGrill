import React, { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import _ from 'lodash';
import FullMenu from '../../../components/FullMenu';
import Modal from '../../../components/Modal';

const GET_MENU_ITEM = gql`
  query getMenuItem($category: String!, $slug: String!) {
    menuItem(category: $category, slug: $slug) {
      name
      description
      price
      category
      imageUrl
      slug
    }
  }
`;

const FoodImage = styled.img`
  width: 40rem;
  height: auto;
`;

const ModalItem = styled.div`
  display: flex;
  flex-direction: row;
`;

const ModalDetails = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  left: 3rem;
`;

const ItemPrice = styled.p`
  border-bottom: none;
`;

const menuItem = () => {
  const [showModal, setShowModal] = useState(true);
  const router = useRouter();

  const context =
    process.env.NODE_ENV === 'development'
      ? { context: { uri: 'http://localhost:3000/api' } }
      : {};

  const { loading, error, data } = useQuery(GET_MENU_ITEM, {
    variables: {
      category: router.query.category,
      slug: router.query.menuItem,
    },
    ...context,
  });

  if (loading) return null;
  if (error) return null;

  console.log('---data', data);

  const { name, description, imageUrl, price } = data.menuItem[0];

  return (
    <>
      <Head>
        <title key="title">Menu - Sand Bar and Island Grill</title>
      </Head>
      <FullMenu />
      <Modal
        onClose={() => {
          // window.history.pushState('', '', '/menu');
          router.replace('/menu');
        }}
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <ModalItem>
          {imageUrl && <FoodImage src={imageUrl} alt={name} />}
          <ModalDetails>
            <h2>{name}</h2>
            <p className="underline">{description}</p>
            <ItemPrice>{price}</ItemPrice>
          </ModalDetails>
        </ModalItem>
      </Modal>
    </>
  );
};

export default menuItem;
