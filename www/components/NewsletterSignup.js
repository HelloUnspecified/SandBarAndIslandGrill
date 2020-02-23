import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ContentSection from './ContentSection';
import NewsletterSignupForm from './NewsletterSignupForm';

const Text = styled.p`
  line-height: 1.8;
  margin: 0;
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

NewsletterSignUp.propTypes = {
  className: PropTypes.string,
};

NewsletterSignUp.defaultProps = {
  className: '',
};

export default styled(NewsletterSignUp)``;
