import React from 'react';
import styled from 'styled-components';

const OutlineLink = styled.a`
  border: 3px solid
    ${({ borderColor, theme }) =>
    borderColor ? theme.colors[borderColor] : theme.colors.orange};
  width: 20rem;
  margin: auto;
  margin-top: 2rem;

  p {
    color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors.light};
    text-transform: uppercase;
    margin: 0.7rem;
    text-align: center;
  }
`;

const LinkButton = props => {
  return (
    <OutlineLink
      href={props.href}
      color={props.color}
      className={props.className}
      borderColor={props.borderColor}
    >
      <p>{props.label}</p>
    </OutlineLink>
  );
};

export default LinkButton;
