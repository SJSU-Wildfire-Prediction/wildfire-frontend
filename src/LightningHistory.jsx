import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Typography, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import { Row, Col } from "reactstrap";
import LoadingSpinner from "./LoadingSpinner";
import { lightningData } from "./components/dataFiles/2021LightningData.json";
import { FireHistory } from "./components/dataFiles/FireHistory.json";


const API_USERNAME = process.env.REACT_APP_METEOMATICS_API_USERNAME
const API_PASSWORD = process.env.REACT_APP_METEOMATICS_API_PASSWORD

class LightningHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightningData : lightningData,
      FireHistory : FireHistory
    };
  }

  formatDate(date){
    if (date.length !== 8) {
      return
    }
    // Format of input date is [year][month][day]
    return (`${date.substring(4, 6)}/${date.substring(6, 8)}/${date.substring(0, 4)}`)
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
                    <TableCell align="center"><h2>Date</h2></TableCell>
                    <TableCell align="center"><h2>Count</h2></TableCell>
                    <TableCell align="center"><h2>Lat</h2></TableCell>
                    <TableCell align="center"><h2>Lon</h2></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>

                  {this.state.lightningData.map((entry) => {
                    return (
                    <TableRow>
                      <TableCell align="center">{this.formatDate.call(this, String(entry.DATE))}</TableCell>
                      <TableCell align="center">{entry.TOTAL_COUNT}</TableCell>
                      <TableCell align="center">{entry.LAT}</TableCell>
                      <TableCell align="center">{entry.LON}</TableCell>
                    </TableRow>
                    );
                  })}
                </TableBody>
              </TableContainer>
            </Row>
          </Grid>
          <Grid item sm={8}>
            <Row>
              <h1>Fire History</h1>
              <TableContainer component={Paper}>
                <TableHead>
                  <TableRow>
                    <TableCell align="center"><h2>Name</h2></TableCell>
                    <TableCell align="center"><h2>Date</h2></TableCell>
                    <TableCell align="center"><h2>County</h2></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>

                  {this.state.FireHistory.slice(0).reverse().map((entry, idx) => {
                    return (
                    <TableRow key={entry, idx}>
                      <TableCell align="center">{entry.incident_name}</TableCell>
                      <TableCell align="center">{entry.incident_dateonly_created}</TableCell>
                      <TableCell align="center">{entry.incident_county}</TableCell>
                    </TableRow>
                    );
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