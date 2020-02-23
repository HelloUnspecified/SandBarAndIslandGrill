import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NewsletterSignupForm from './NewsletterSignupForm';

const ClosedForSeason = ({ className }) => {
  return (
    <div className={className}>
      <h2>We're currently closed for the season</h2>
      <p>But it's almost spring. Our doors reopen on April 1st 2020!</p>
      <h3>
        Signup for our newsletter toady and be the first to know when you can
        book a reservation!
      </h3>
      <NewsletterSignupForm />
    </div>
  );
};

ClosedForSeason.propTypes = {
  className: PropTypes.string,
};

ClosedForSeason.defaultProps = {
  className: '',
};

export default styled(ClosedForSeason)``;
