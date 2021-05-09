import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Typography, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import { Row, Col } from "reactstrap";
import Navbar from "./components/Navbar/Navbar";
import csvread from "./components/csvread";
import LoadingSpinner from "./LoadingSpinner";
import LightningStrikesTable from "./LightningStrikesTable";
import { lightningData } from "./components/dataFiles/2021LightningData.json";
import { FireHistory } from "./components/dataFiles/FireHistory.json";


const API_USERNAME = process.env.REACT_APP_METEOMATICS_API_USERNAME
const API_PASSWORD = process.env.REACT_APP_METEOMATICS_API_PASSWORD

class LightningHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data : lightningData,
        data2 : FireHistory
    }
  }


  render() {

    return (
      <div class=''>
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
                  History Data
                  </Typography>

                <Typography variant="h5" color="inherit">
                  Group 29
                  </Typography>
              </Toolbar>
            </AppBar>
          </Grid>


          <Grid item sm={15}>
            <Row>
              <h1>Lightning History</h1>
              <TableContainer component={Paper}>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Date</TableCell>
                    <TableCell align="center">Count</TableCell>
                    <TableCell align="center">Lat</TableCell>
                    <TableCell align="center">Lon</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  
                  {this.state.data.map(function (entry) {
                    return <TableRow>
                      <TableCell align="center">{entry.DATE}</TableCell>
                      <TableCell align="center">{entry.TOTAL_COUNT}</TableCell>
                      <TableCell align="center">{entry.LAT}</TableCell>
                      <TableCell align="center">{entry.LON}</TableCell>
                    </TableRow>
                  })}
                </TableBody>
              </TableContainer>
            </Row>
          </Grid>
          <Grid item sm={13}>
            <Row>
              <h1>Fire History</h1>
              <TableContainer component={Paper}>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Date</TableCell>
                    <TableCell align="center">County</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  
                  {this.state.data2.map(function (entry) {
                    return <TableRow>
                      <TableCell align="center">{entry.incident_name}</TableCell>
                      <TableCell align="center">{entry.incident_dateonly_created}</TableCell>
                      <TableCell align="center">{entry.incident_county}</TableCell>
                      
                    </TableRow>
                  })}
                </TableBody>
              </TableContainer>
            </Row>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default LightningHistory;