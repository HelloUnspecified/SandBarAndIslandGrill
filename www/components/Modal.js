import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon from './Icon';

const ModalMain = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
  display: ${props => (props.showModal ? '' : 'none')};
`;

const ModalContent = styled.div`
  position: fixed;
  background: white;
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  max-width: 85rem;
`;

const CloseIcon = styled(Icon)`
  height: 2rem;
  width: 2rem;
  position: absolute;
  right: 1rem;

  svg {
    fill: ${({ theme }) => theme.colors.dark};
  }

  &:hover {
    cursor: pointer;
  }
`;

const Modal = ({
  className,
  children,
  onClose,
  onLoad,
  showModal,
  setShowModal,
}) => {
  onLoad();

  return (
    <ModalMain
      showModal={showModal}
      className={className}
      onClick={() => {
        onClose();
        setShowModal(!showModal);
      }}
    >
      <ModalContent>
        <CloseIcon
          icon="close"
          onClick={() => {
            onClose();
            setShowModal(!showModal);
          }}
        />
        {children}
      </ModalContent>
    </ModalMain>
  );
};

Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.shape({}).isRequired,
  onClose: PropTypes.func,
  onLoad: PropTypes.func,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  className: '',
  onClose: () => {},
  onLoad: () => {},
};

export default styled(Modal)`
  h2 {
    font-size: 2.8rem;
    margin-bottom: 0.7rem;
  }

  h2,
  h3,
  p {
    text-align: center;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.dark};
  }

  h2,
  h3 {
    font-weight: 400;
  }

  p {
    padding-bottom: 2rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.orange};
    max-width: 60rem;
    margin: auto;
  }

  .mc-field-group {
    justify-content: center;
  }
`;
