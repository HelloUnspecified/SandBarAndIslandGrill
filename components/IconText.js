import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from './Icon';

const IconBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ align }) => align || 'left'};
`;

const IconText = ({ align, children, className, icon }) => {
  return (
    <IconBlock align={align} className={className} key={icon}>
      <Icon icon={icon} height="24" width="24" />
      {children}
    </IconBlock>
  );
};

IconText.propTypes = {
  align: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
};

IconText.defaultProps = {
  className: '',
};

export default IconText;
