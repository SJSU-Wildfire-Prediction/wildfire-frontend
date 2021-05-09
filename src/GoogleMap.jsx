import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

import Marker from './Marker.tsx';
import Marker_red from './Marker_red.tsx';

import { lightningData } from "./components/dataFiles/2021LightningData.json";
import LightningHistory from "./LightningHistory";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 37.3344476,
        lng: -121.8826716
      },
      zoom: 11,
      lightningData: lightningData
    };
  }

  formatDate(date){
    if (date.length !== 8) {
      return
    }
    return (`${date.substring(4,6)}/${date.substring(6,8)}/${date.substring(0,4)}`)
  }

  render() {
    console.log(API_KEY)
    console.log("process.env: ", process.env)
    return (
      <div style={{ height: '100vh', width: '100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
        {this.state.lightningData.map((lightning, idx) => {
            return (
              <Marker key={idx}
                lat={lightning.LAT}
                lng={lightning.LON}
                name={this.formatDate.call(this, String(lightning.DATE))}
              />
            );
        })

        }
        </GoogleMapReact>
      </div>
    );
  }
}


export default GoogleMap;