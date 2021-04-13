import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
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
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="test marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}


export default GoogleMap;