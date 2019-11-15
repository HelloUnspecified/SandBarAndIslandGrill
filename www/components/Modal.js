import React, { useState } from 'react';
import styled from 'styled-components';
import { above, below } from '../utitlies/breakpoint.js';
import NewsletterSignupForm from './NewsletterSignupForm';
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

  &:hover {
    cursor: pointer;
  }
`;

const Modal = ({ className }) => {
  const [showModal, setShowModal] = useState(true);

  return (
    <ModalMain showModal={showModal} className={className}>
      <ModalContent>
        <CloseIcon icon="close" onClick={() => setShowModal(!showModal)} />
        <h2>We are closed for the season</h2>
        <p>But don't worry we will be back in before you know it in spring!</p>
        <h3>
          Signup for our newsletter to be the first to know when we re-open!
        </h3>
        <NewsletterSignupForm />
      </ModalContent>
    </ModalMain>
  );
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
