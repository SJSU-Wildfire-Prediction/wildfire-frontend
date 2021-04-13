import React, { Component} from "react";
import {AppBar, Toolbar, Button, Typography, Grid, Paper} from "@material-ui/core";
import {Row, Col} from "reactstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import GoogleMapReact from "google-map-react";
import GoogleMap from "./GoogleMap";
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
                <b>SJSU</b> CMPE '21
              </Typography>
              <Typography variant="h5" color="inherit">
                Wildfire Analysis Through Lightning
              </Typography>
              <Typography variant="h5" color="inherit">
                Group 29
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
        {/* <div className="topbar-buffer" /> */}
        <Grid item sm={3}>
        {/* <Grid container spacing={8}> */}
          <Row>
            <div className="map-legend">

            </div>
          </Row>
          <Row>
            <div className="lightning-table">
              <h1>Lightning Strikes</h1>
            </div>
          </Row>
        </Grid>
        <Grid item sm={9}>
          <div className="map-container">
            {/* This is where map is rendered */}
            <GoogleMap />
          </div>
        </Grid>
      </Grid>
    )
  }
}

export default Dashboard;