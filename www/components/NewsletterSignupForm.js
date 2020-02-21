import React from 'react';
import styled from 'styled-components';

import { below } from '../utilities/breakpoint.js';

const Form = styled.form`
  margin-top: 2rem;
  text-align: center;

  div.mc-field-group {
    display: flex;
    flex-direction: row;

    ${below.med`
      text-align: center;
      flex-direction: column;
      align-items: center;
    `};
  }

  label {
    padding-right: 1rem;
    color: ${({ theme }) => theme.colors.dark};
  }

  input.email {
    min-width: 27rem;
    max-width: 33rem;
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

const NewsletterSignupForm = ({ className }) => {
  return (
    <div id="mc_embed_signup" style={{ width: '100%' }}>
      <Form
        action="https://sandbarandislandgrill.us20.list-manage.com/subscribe/post?u=9b30f5d6de6cbfe580fddd3c7&amp;id=465a291c6d"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          <div className="mc-field-group" style={{ margin: 'auto' }}>
            <label htmlFor="mce-EMAIL">Email Address</label>
            <input
              type="email"
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
            />
          </div>
          <div id="mce-responses">
            <div
              className="response"
              id="mce-error-response"
              style={{ display: 'none' }}
            />
            <div
              className="response"
              id="mce-success-response"
              style={{ display: 'none' }}
            />
          </div>
          <div
            style={{ position: 'absolute', left: '-5000px' }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_9b30f5d6de6cbfe580fddd3c7_465a291c6d"
              tabIndex="-1"
              value=""
            />
          </div>
          <div>
            <SubmitButton
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default styled(NewsletterSignupForm)`
  div {
    width: 100%;
  }
`;
