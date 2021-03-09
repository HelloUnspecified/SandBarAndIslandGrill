import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NewsletterSignupForm from './NewsletterSignupForm';

const Covid = ({ className }) => {
  return (
    <div className={className}>
      <h2>We're Opening Soon!!!</h2>
      <h3 className="underline">
        The wait is over! Doors open May 1st 2021.
      </h3>
      <p>
        We here at the Sand Bar are very eager to open for the 2021 season. We will open no later than May 1st with some restrictions to help maintain a safe environment for everyone.
      </p>
      <br />
      <p className="underline">
        Once again, Thank You for being such an amazing community and you're continued patience.
      </p>
      <br />
      <p>
        Signup for our newsletter today and be the first to know when you can
        book a reservation!
      </p>
      <NewsletterSignupForm />
    </div>
  );
};

Covid.propTypes = {
  className: PropTypes.string,
};

Covid.defaultProps = {
  className: '',
};

export default styled(Covid)``;
