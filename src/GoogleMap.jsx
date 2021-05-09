import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

import Marker from './Marker.tsx';
import Marker_red from './Marker_red.tsx';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 37.3344476,
      lng: -121.8826716
    },
    zoom: 11
  };

  render() {
    console.log(API_KEY)
    console.log("process.env: ", process.env)
    return (
      <div style={{ height: '100vh', width: '100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {/* <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="test marker"
          /> */}
          <Marker
            lat={37.3344476}
            lng={-121.8826716}
            name="Sample Lightning"
          />
          <Marker_red
            lat={37.3337}
            lng={-121.9907}
            name="Sample Lightning Wildfire"
          />

        </GoogleMapReact>
      </div>
    );
  }
}


export default GoogleMap;