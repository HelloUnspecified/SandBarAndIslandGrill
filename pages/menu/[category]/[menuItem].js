import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import FullMenu from '../../../components/FullMenu';
import Modal from '../../../components/Modal';
import { below, categories } from '../../../utilities';

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
  padding-right: 3rem;
  object-fit: cover;

  ${below.med`
    width: 100%;
    max-width: 55rem;
    padding-right: 0;
    margin: auto;
  `}
`;

const ModalItem = styled.div`
  display: flex;
  flex-direction: row;

  ${below.med`
    flex-direction: column;
    margin-top: 3rem;
  `}
`;

const ModalDetails = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: 3rem 2rem;
`;

const ItemPrice = styled.p`
  border-bottom: none;
  width: 100%;
`;

const menuItem = () => {
  const [showModal, setShowModal] = useState(true);
  const router = useRouter();

  const context =
    process.env.NODE_ENV === 'development'
      ? { context: { uri: 'http://localhost:8000/api/graphql' } }
      : {};

  const { loading, error, data } = useQuery(GET_MENU_ITEM, {
    variables: {
      category: categories.find(c => c.route === router.query.category).route,
      slug: router.query.menuItem,
    },
    ...context,
  });

  if (loading) return null;
  if (error) return null;

  // TO DO: should just return an item not an array
  const { name, description, imageUrl, price } = data.menuItem[0];

  return (
    <>
      <NextSeo
        title={`${name} - Sand Bar and Island Grill`}
        description={description}
      />
      <FullMenu />
      <Modal
        onClose={() => {
          router.replace('/menu');
        }}
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <ModalItem>
          {imageUrl && <FoodImage src={imageUrl} alt={name} />}
          <ModalDetails>
            <h2 style={{ marginBottom: '3rem', marginTop: '0' }}>{name}</h2>
            <p>{description}</p>
            {/* {price && <ItemPrice className="top-line">${price}</ItemPrice>} */}
          </ModalDetails>
        </ModalItem>
      </Modal>
    </>
  );
};

export default menuItem;
