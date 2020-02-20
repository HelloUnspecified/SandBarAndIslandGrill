import React, { useState } from 'react';
import styled from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useRouter } from 'next/router';
import ContentSection from './ContentSection';
import Hero from './Hero';
import MenuGroup from './MenuGroup';
import { below } from '../utilities/breakpoint';
import Modal from './Modal';

const GET_MENU = gql`
  query getMenu {
    menu {
      name
      description
      price
      category
      imageUrl
    }
  }
`;

const Menu = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  ${below.med`
    flex-direction: column;
    margin: auto;
  `};
`;

const FoodImage = styled.img`
  width: 10rem;
  height: auto;
`;

const FullMenu = () => {
  // const router = useRouter();
  // const [showModal, setshowModal] = useState(false);
  // const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const context =
    process.env.NODE_ENV === 'development'
      ? { context: { uri: 'http://localhost:3000/api' } }
      : {};

  const { loading, error, data } = useQuery(GET_MENU, context);

  if (loading) return null;
  if (error) return null;

  const groupedDinners = () => {
    return data.menu.reduce((r, a) => {
      r[a.category] = [...(r[a.category] || []), a];
      return r;
    }, {});
  };

  return (
    <ParallaxProvider>
      <>
        <Hero
          imagePath="/static/images/tacos-and-rings.jpg"
          heading="Sand Bar and Island Grill"
          href="tel:1-262-877-9500"
          label="Call for Reservations"
        />

        <ContentSection title="Menu">
          {/* {showModal && (
            <Modal
              onClose={() => {
                // window.history.pushState('', '', '/menu');
                router.push('/menu');
              }}
              onLoad={() => {
                // window.history.pushState('', '', `/menu/bacon`);
                router.push('/menu/bacon');
              }}
              showModal={showModal}
              setShowModal={setshowModal}
            >
              <h2>{selectedMenuItem.name}</h2>
              <p>{selectedMenuItem.description}</p>
              <FoodImage
                src="/static/images/tacos-and-rings.jpg"
                alt={selectedMenuItem.name}
              />
            </Modal>
          )} */}
          <Menu>
            <MenuGroup
              title="Drinks"
              items={groupedDinners().DRINK}
              // setSelectedMenuItem={setSelectedMenuItem}
              // setshowModal={setshowModal}
            />
            <MenuGroup
              title="Appetizers"
              items={groupedDinners().APPETIZER}
              // setSelectedMenuItem={setSelectedMenuItem}
              // setshowModal={setshowModal}
            />
            <MenuGroup
              title="Wraps"
              items={groupedDinners().WRAP}
              subtext="All wraps served with your choice of<br>French Fries or Island Slaw.<p class='addon'>Try a side of our Sweet Potato Fries for an additional $0.50 or Onion Rings for $3.00.</p>"
              // setSelectedMenuItem={setSelectedMenuItem}
              // setshowModal={setshowModal}
            />
            <MenuGroup
              title="Salads"
              items={groupedDinners().SALAD}
              subtext="Add Chicken - $2.00<br/>Add Shrimp, Salmon, Grouper, Tuna or Mahi - $5.00"
              // setSelectedMenuItem={setSelectedMenuItem}
              // setshowModal={setshowModal}
            />
            <MenuGroup
              title="Dinner on Land"
              items={groupedDinners().DINNER_LANDFOOD}
              // setSelectedMenuItem={setSelectedMenuItem}
              // setshowModal={setshowModal}
            />
            <MenuGroup
              title="Dinner from the Sea"
              items={groupedDinners().DINNER_SEAFOOD}
              // setSelectedMenuItem={setSelectedMenuItem}
              // setshowModal={setshowModal}
            />
            <MenuGroup
              title="Kids"
              items={groupedDinners().KIDS}
              // setSelectedMenuItem={setSelectedMenuItem}
              // setshowModal={setshowModal}
            />
          </Menu>
        </ContentSection>
      </>
    </ParallaxProvider>
  );
};

export default React.memo(FullMenu);
// export default FullMenu;
