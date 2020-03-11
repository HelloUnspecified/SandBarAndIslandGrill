import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as gtag from '../lib/gtag';

const OutlineLink = styled.a`
  border: 3px solid
    ${({ borderColor, theme }) =>
      borderColor ? theme.colors[borderColor] : theme.colors.orange};
  margin: auto;
  margin-top: 2rem;
  min-width: 20rem;

  &:hover {
    background-color: ${({ borderColor, theme }) =>
      borderColor ? theme.colors[borderColor] : theme.colors.orange};
  }

  p {
    color: ${({ color, theme }) =>
      color ? theme.colors[color] : theme.colors.light};
    text-transform: uppercase;
    margin: 0.7rem;
    text-align: center;
  }
`;

const LinkButton = ({ borderColor, className, color, href, label }) => {
  const clickTracking = () => {
    gtag.event({
      clientWindow: window,
      action: 'click',
      category: 'link button',
      label,
    });
  };

  return (
    <OutlineLink
      href={href}
      color={color}
      className={className}
      borderColor={borderColor}
      onClick={() => {
        clickTracking();
      }}
    >
      <p>{label}</p>
    </OutlineLink>
  );
};

LinkButton.propTypes = {
  borderColor: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  href: PropTypes.string,
  label: PropTypes.string,
};

LinkButton.defaultProps = {
  borderColor: '',
  className: '',
  color: '',
  href: '',
  label: '',
};

export default LinkButton;
