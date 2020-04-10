import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NewsletterSignupForm from './NewsletterSignupForm';

const Covid = ({ className }) => {
  return (
    <div className={className}>
      <h2>We're currently closed.</h2>
      <h3 className="underline">
        Due to the stringent CDC guidelines placed upon us we've chosen to
        postpone our opening.
      </h3>
      <p>
        We here at the Sand Bar are anxious for the season to get started and
        assure you we’ll open as soon as it is safe for everyone.
      </p>
      <br />
      <p>
        It’s easy to get stir crazy. Every week we’re posting a Tiki drink
        recipe that you can make at home. We want you to kick off your weekend
        Tiki style and we hope this helps just a little.
      </p>
      <br />
      <p className="underline">
        Once again, Thank You for being such an amazing community. You’re the
        best and regardless of the circumstances we’re still family. Please be
        safe, take care of those around you, and maybe even enjoy a few Tiki
        drinks on the couch.
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
