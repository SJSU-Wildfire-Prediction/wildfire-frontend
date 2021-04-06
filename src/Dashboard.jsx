import React, { Component} from "react";
import {AppBar, Toolbar, Button, Typography, Grid} from "@material-ui/core";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
// import GoogleMapReact from "google-map-react";
import "./App.css";


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <AppBar className="general-top-bar" position="absolute">
            <Toolbar className="topbar-toolbar">
              <Typography variant="h5" color="inherit">
                SJSU
              </Typography>
              <Typography variant="h5" color="inherit">
                Wildfire Lightning
              </Typography>
              <Typography variant="h5" color="inherit">
                Group 29
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
        {/* <div className="topbar-buffer" /> */}
        <Grid item sm={3}>
        </Grid>
        <Grid item sm={9}>
          <div className="map-container">
            {/* This is where map is rendered */}
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[51.505, -0.09]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </Grid>
      </Grid>
    )
  }
}

export default Dashboard;