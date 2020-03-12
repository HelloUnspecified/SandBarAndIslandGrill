import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Grid, Cell } from 'styled-css-grid';
import { below, categories } from '../utilities';

const MenuGrouping = styled.div`
  width: 100%;
  padding-bottom: 2rem;

  ${below.med`
    width: 100%;
    text-align: center;
  `};
`;

const GroupTitle = styled.h2`
  width: 100%;
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.primary};
  padding-left: 1rem;
  font-size: 1.4rem;
  text-transform: uppercase;
  margin: 5rem 0;

  &:first-child {
    margin-top: 2rem;
  }
`;

const GroupSubtext = styled.p`
  line-height: 1.2;
  text-align: center;
  font-style: italic;
  position: relative;
  top: -2rem;

  p.addon {
    margin: 1rem 0 0 0;
  }
`;

const MenuItem = styled(Cell)`
  font-size: 1.4rem;
  line-height: 1.4;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 4rem;

  &:hover {
    cursor: pointer;
  }
`;

const ItemName = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  padding-right: 0.4rem;
  font-weight: 800;
  text-transform: uppercase;
`;

const ItemPrice = styled.span`
  padding-left: 0.7rem;
`;

const ItemDescription = styled.p`
  margin-top: 0;
  text-align: center;
`;

const MenuGroup = ({ title, subtext, items }) => {
  const router = useRouter();
  const handleClick = (e, item) => {
    router.replace(
      '/menu/[category]/[menuItem]',
      `/menu/${categories.find(c => c.key === item.category).route}/${
        item.slug
      }`,
    );
  };

  return (
    <MenuGrouping>
      <GroupTitle>{title.replace('_', ' ')}</GroupTitle>
      {subtext && (
        <GroupSubtext dangerouslySetInnerHTML={{ __html: subtext }} />
      )}
      <Grid columns="repeat(auto-fit,minmax(30rem,1fr))" gap="4rem 10rem">
        {items.map(item => {
          return (
            <MenuItem onClick={e => handleClick(e, item)} key={item.name}>
              <ItemName>{item.name}</ItemName>
              <ItemDescription
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
              <ItemPrice>
                {item.price === 0.0 ? 'Market Price' : item.price}
              </ItemPrice>
            </MenuItem>
          );
        })}
      </Grid>
    </MenuGrouping>
  );
};

MenuGroup.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number,
    }),
  ).isRequired,
  subtext: PropTypes.string,
  title: PropTypes.string.isRequired,
};

MenuGroup.defaultProps = {
  subtext: '',
};

export default styled(MenuGroup)``;
