import React from 'react';
import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { ParallaxProvider } from 'react-scroll-parallax';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Hero from '../../components/Hero';
import ContentSection from '../../components/ContentSection';
import MenuGroup from '../../components/MenuGroup';
import { below, categories } from '../../utilities';

const GET_MENU_CATEGORY = gql`
  query getMenuCategory($category: String!) {
    menuCategory(category: $category) {
      name
      description
      price
      category
      imageUrl
      slug
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

const BackLink = styled.a`
  text-align: left;
  width: 100%;
  color: ${props => props.theme.colors.secondary};

  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

const menuCategory = () => {
  const router = useRouter();
  const routerCategory = router.query.category;

  const context =
    process.env.NODE_ENV === 'development'
      ? { context: { uri: 'http://localhost:3000/api' } }
      : {};

  const { loading, error, data } = useQuery(GET_MENU_CATEGORY, {
    variables: {
      category: routerCategory,
    },
    ...context,
  });

  if (loading) return null;
  if (error) return null;

  const { menuCategory: categoryItems } = data;

  const { subtext, title } = categories.find(c => c.route === routerCategory);

  const displayTitle = routerCategory === 'dinners' ? 'Dinners' : title;

  return (
    <>
      <NextSeo
        title="Menu - Sand Bar and Island Grill"
        description="All of are delicious food and drink specials here at Sand Bar and Island Grill."
      />
      <ParallaxProvider>
        <>
          <Hero
            imagePath="/static/images/tacos-and-rings.jpg"
            heading="Sand Bar and Island Grill"
            href="tel:1-262-877-9500"
            label="Call for Reservations"
          />

          <ContentSection title={`${displayTitle} Menu`}>
            <>
              <BackLink href="/menu">Full Menu</BackLink>
              <Menu>
                <MenuGroup
                  title={displayTitle}
                  items={categoryItems}
                  subtext={subtext}
                />
              </Menu>
            </>
          </ContentSection>
        </>
      </ParallaxProvider>
    </>
  );
};

export default menuCategory;
