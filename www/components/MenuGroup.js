import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';
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

const MenuGroup = ({
  title,
  subtext,
  items,
  setSelectedMenuItem,
  setshowModal,
}) => {
  const handleClick = (e, item) => {
    setSelectedMenuItem(item);
    setshowModal(true);
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
            <ItemName>{item.name}</ItemName>
            {item.description}
            <ItemPrice>{item.price}</ItemPrice>
          </MenuItem>
        );
      })}
    </MenuGrouping>
  );
};

export default styled(MenuGroup)``;
