import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { below } from '../utilities/breakpoint';

const MenuGrouping = styled.div`
  width: 47%;
  margin: 0 1.5%;
  padding-bottom: 2rem;

  ${below.med`
    width: 100%;
    text-align: left;
  `};
`;

const GroupTitle = styled.h2`
  width: 100%;
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.primary};
  padding-left: 1rem;
  font-size: 1.4rem;
  text-transform: uppercase;
`;

const GroupSubtext = styled.p`
  line-height: 1.2;
  text-align: center;
  font-style: italic;

  p.addon {
    margin: 1rem 0 0 0;
  }
`;

const MenuItem = styled.p`
  font-size: 1.4rem;
  line-height: 1.4;
  display: flex;
  flex-direction: column;

  &:hover {
    cursor: pointer;
  }
`;

const ItemTopLine = styled.div`
  display: flex;
  flex-direction: row;
`;

const ItemName = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  padding-right: 0.4rem;
  font-weight: 800;
  text-transform: uppercase;
  flex-grow: 2;
`;

const ItemPrice = styled.span`
  padding-left: 0.7rem;
`;

const MenuGroup = ({ title, subtext, items }) => {
  const router = useRouter();
  const handleClick = (e, item) => {
    router.replace('/menu/[menuItem]', '/menu/bacon');
  };

  return (
    <MenuGrouping>
      <GroupTitle>{title.replace('_', ' ')}</GroupTitle>
      {subtext && (
        <>
          <GroupSubtext dangerouslySetInnerHTML={{ __html: subtext }} />
          <hr />
        </>
      )}
      {items.map(item => {
        return (
          <MenuItem onClick={e => handleClick(e, item)} key={item.name}>
            <ItemTopLine>
              <ItemName>{item.name}</ItemName>
              <ItemPrice>{item.price}</ItemPrice>
            </ItemTopLine>
            {item.description}
          </MenuItem>
        );
      })}
    </MenuGrouping>
  );
};

MenuGroup.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
  subtext: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default styled(MenuGroup)``;
