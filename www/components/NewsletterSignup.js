import React from 'react';
import styled from 'styled-components';
import ContentSection from './ContentSection';
import NewsletterSignupForm from './NewsletterSignupForm';

import { below } from '../utilities/breakpoint.js';

const Text = styled.p`
  line-height: 1.8;
  margin: 0;
`;

const Form = styled.form`
  margin-top: 2rem;
  text-align: center;

  div.mc-field-group {
    display: flex;
    flex-direction: row;

    ${below.med`
      text-align: center;
      flex-direction: column;
    `};
  }
`;

const SubmitButton = styled.input`
  color: ${({ theme }) => theme.colors.highlight};
  background-color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  margin-top: 2rem;
  text-align: center;
  padding: 1.4rem;

  width: 20rem;
`;

const NewsletterSignUp = ({ className }) => {
  return (
    <ContentSection
      title="Newsletter Signup"
      color="light"
      className={className}
    >
      <Text>
        Sign up for our newsletter list to be the first to hear about spring
        opening, specials, events and all we are up here at Sand Bar.
      </Text>
      <NewsletterSignupForm />
    </ContentSection>
  );
};

export default styled(NewsletterSignUp)``;
