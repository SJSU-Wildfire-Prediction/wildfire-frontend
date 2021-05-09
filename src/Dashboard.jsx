import React, { Component} from "react";
import {AppBar, Toolbar, Button, Typography, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {Row, Col} from "reactstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import GoogleMapReact from "google-map-react";
import GoogleMap from "./GoogleMap";
import "./App.css";
import LoadingSpinner from "./LoadingSpinner";
import LightningStrikesTable from "./LightningStrikesTable";


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AJAXinProgress: false,
    }
  }

  render() {
    return (
      <div>
        {this.state.AJAXinProgress ? (
          <LoadingSpinner />
        ) : (
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
                    Dashboard
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
                {/* <LightningStrikesTable /> */}
              </Row>
            </Grid>
            <Grid item sm={9}>
              <div className="map-container">
                {/* This is where map is rendered */}
                <GoogleMap />
              </div>
            </Grid>
          </Grid>
        )}
      </div>
    )
  }
}

export default Dashboard;