import React, { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import FullMenu from '../../components/FullMenu';
import Modal from '../../components/Modal';

const GET_MENU_ITEM = gql`
  query getMenuItem {
    menu {
      name
      description
      price
      category
      imageUrl
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

  const { loading, error, data } = useQuery(GET_MENU_ITEM, {
    variables: { slug: router.query.slug },
  });

  if (loading) return null;
  if (error) return null;

  const { menu } = data;
  const menuItemSelected = menu[0];

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
          <FoodImage
            src="/static/images/tacos-and-rings.jpg"
            alt={menuItemSelected.name}
          />
          <ModalDetails>
            <h2>{menuItemSelected.name}</h2>
            <p className="underline">{menuItemSelected.description}</p>
            <ItemPrice>{menuItemSelected.price}</ItemPrice>
          </ModalDetails>
        </ModalItem>
      </Modal>
    </>
  );
};

export default menuItem;
