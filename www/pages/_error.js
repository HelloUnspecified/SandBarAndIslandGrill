import React, { Fragment } from 'react';

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode, err };
  }

  render() {
    return (
      <>
        <p>
          {this.props.statusCode
            ? `An error ${this.props.statusCode} occurred on server`
            : 'An error occurred on client'}
        </p>
        <p>Error: ${this.props.err}</p>
      </>
    );
  }
}

export default Error;
