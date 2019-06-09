import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 42.497540,
      lng: -88.272200
    },
    zoom: 11
  };

  render() {
    console.log(this);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '300px', width: '100vh' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAyDvd2WtMiZPOlruEguE6NNRESVqDeXao" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
