import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";

import Marker from './Marker.tsx';
import Marker_red from './Marker_red.tsx';

import { lightningData } from "./components/dataFiles/2021LightningData.json";
import LightningHistory from "./LightningHistory";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
const API_USERNAME = process.env.REACT_APP_METEOMATICS_API_USERNAME
const API_PASSWORD = process.env.REACT_APP_METEOMATICS_API_PASSWORD
const BACKEND_API = process.env.REACT_APP_BACKEND_API

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 37.3344476,
        lng: -121.8826716
      },
      zoom: 11,
      lightningData: lightningData,
      currentLightning: []
    };
  }

  getCurrentDate() {
    var dateObj = new Date();
    var yesterday = new Date(dateObj)

    var month = ('0' + (dateObj.getUTCMonth() + 1)).slice(-2);
    var day = ('0' + (dateObj.getUTCDate())).slice(-2);
    var year = dateObj.getUTCFullYear();

    return [month, day, year];
  }

  getYesterdayDate() {
    var dateObj = new Date();
    var yesterday = new Date(dateObj)

    yesterday.setDate(yesterday.getDate() - 1)

    var month = ('0' + (yesterday.getUTCMonth() + 1)).slice(-2);
    var day = ('0' + (yesterday.getUTCDate())).slice(-2);
    var year = dateObj.getUTCFullYear();

    return [month, day, year];
  }

  getLightningStrikes() {

    const [month, day, year] = this.getCurrentDate();
    const [yMonth, yDay, yYear] = this.getYesterdayDate();

    const apiUrl = `https://api.meteomatics.com/get_lightning_list?time_range=${yYear}-${yMonth}-${yDay}T00%3A00%3A00Z--${year}-${month}-${day}T00%3A00%3A00Z&bounding_box=42.01%2C-124.41_32.53%2C-114.13&format=json`

    console.log(apiUrl);

    var lightningList = []

    axios
      .get(
        apiUrl,
        {
          auth: {
            username: API_USERNAME,
            password: API_PASSWORD
          }
        }
      )
      .then(resp => {
        console.log(resp);
        if (resp.status === 200) {
          lightningList = resp.data.lightning_list
          this.setState({
            currentLightning: resp.data.lightning_list
          })
          console.log(resp.data.lightning_list);
          this.getMLPrediction(lightningList);
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  formatDate(date){
    if (date.length !== 8) {
      return
    }
    return (`${date.substring(4,6)}/${date.substring(6,8)}/${date.substring(0,4)}`)
  }

  componentDidMount() {
    this.getLightningStrikes();
  }

  getMLPrediction(lightningList) {

    if (lightningList.length == 0) {
      return
    }

    var lightningDataCopy = []

    lightningList.forEach(element => {
      var lat = element["stroke_lat:d"]
      var lon = element["stroke_lon:d"]

      axios
        .get(BACKEND_API + `/ml?lat=${lat}&lon=${lon}`)
        .then(resp => {
          if (resp.status === 200) {
            lightningDataCopy.push({
              ...element,
              "causes_fire": resp.data.MLOutput
            })
          }
        })
    })

    this.setState({
      currentLightning: lightningDataCopy
    })
  }

  render() {
    console.log(API_KEY)
    console.log("process.env: ", process.env)
    const [month, day, year] = this.getCurrentDate();
    return (
      <div style={{ height: '100vh', width: '100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
        {this.state.currentLightning.map((lightning, idx) => {
          if (lightning.causes_fire) {
            return (
              <Marker_red key={idx}
                lat={lightning["stroke_lat:d"]}
                lng={lightning["stroke_lon:d"]}
                name={`${month}/${day}/${year}`}
              />
            )
          } else {
            return (
              <Marker key={idx}
                lat={lightning["stroke_lat:d"]}
                lng={lightning["stroke_lon:d"]}
                name={`${month}/${day}/${year}`}
              />
            )
          }
        })}
        {this.state.lightningData.map((lightning, idx) => {
            return (
              <Marker key={idx}
                lat={lightning.LAT}
                lng={lightning.LON}
                name={this.formatDate.call(this, String(lightning.DATE))}
              />
            );
        })}
        </GoogleMapReact>
      </div>
    );
  }
}


export default GoogleMap;