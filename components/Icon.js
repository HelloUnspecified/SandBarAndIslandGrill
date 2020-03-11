import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { svgs } from '../utilities';

const Svg = styled.svg`
  width: auto;
  height: 100%;

  &.down {
    transform: rotate(90deg);
  }

  &.up {
    transform: rotate(-90deg);
  }

  &.left {
    transform: rotate(-180deg);
  }

  &.medium {
    fill: ${({ theme }) => theme.colors.medium};
  }
`;

const Icon = ({ className, onClick, height, width, icon }) => {
  return (
    <Svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
      viewBox={`0 0 ${height} ${width}`}
    >
      <title>{svgs[icon].title}</title>
      {svgs[icon].path.map((item, index) => {
        return <path d={item} key={`${icon}${index}`} />;
      })}
    </Svg>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  width: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
  height: '24',
  onClick: () => {},
  width: '24',
};

export default Icon;
